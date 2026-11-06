"""Check generated pages, local assets, heading anchors, and article imports.

Run after Hugo: python scripts/check_site.py public
"""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import json
import re
import sys


class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.ids = set()
        self.references = []
        self.headings = []
        self.images = 0
        self.duplicate_ids = []
        self.redirect = False
        self.feed(text)

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        anchor = attrs.get('id')
        if anchor:
            if anchor in self.ids:
                self.duplicate_ids.append(anchor)
            self.ids.add(anchor)
        if tag in ('h1', 'h2', 'h3', 'h4', 'h5', 'h6'):
            self.headings.append((tag, anchor))
        if tag == 'meta' and attrs.get('http-equiv', '').lower() == 'refresh':
            self.redirect = True
        if tag in ('a', 'link') and attrs.get('href'):
            self.references.append(attrs['href'])
        if tag in ('script', 'img') and attrs.get('src'):
            self.references.append(attrs['src'])
        if tag == 'img' and attrs.get('src'):
            self.images += 1


def main():
    output = Path(sys.argv[1] if len(sys.argv) > 1 else 'public').resolve()
    if not (output / 'index.html').is_file():
        raise SystemExit('Build the site with Hugo before checking.')
    pages = {p.resolve(): Page(p.read_text(encoding='utf-8'))
             for p in output.rglob('*.html')}
    errors = []
    for path, page in pages.items():
        relative = path.relative_to(output)
        if page.redirect:
            continue
        if sum(tag == 'h1' for tag, _ in page.headings) != 1:
            errors.append(f'{relative}: expected one page title')
        for anchor in page.duplicate_ids:
            errors.append(f'{relative}: duplicate anchor {anchor}')
        for ref in page.references:
            url = urlsplit(ref)
            if url.scheme or url.netloc:
                continue
            target = ((output / unquote(url.path).lstrip('/')) if url.path.startswith('/')
                      else (path.parent / unquote(url.path))) if url.path else path
            target = target.resolve()
            try:
                target.relative_to(output)
            except ValueError:
                errors.append(f'{relative}: link escapes output: {ref}')
                continue
            if target.is_dir():
                target = target / 'index.html'
            if not target.is_file():
                errors.append(f'{relative}: missing target {ref}')
            elif url.fragment and target in pages and unquote(url.fragment) not in pages[target].ids:
                errors.append(f'{relative}: missing section {ref}')

    sources = list(Path('content/posts').rglob('*.md'))
    for source in sources:
        text = source.read_text(encoding='utf-8')
        outside_code = re.sub(r'^```[^\n]*\n.*?^```[^\n]*$', '', text, flags=re.M | re.S)
        if re.search(r'^#{1,6}[ \t]*$', outside_code, re.M):
            errors.append(f'{source}: empty Markdown heading')
        for ref in re.findall(r'!\[[^\]]*\]\(([^)]+)\)', outside_code):
            if not urlsplit(ref).scheme and not ref.startswith('/'):
                if not (source.parent / unquote(ref)).is_file():
                    errors.append(f'{source}: missing source image {ref}')

    search = json.loads((output / 'index.json').read_text(encoding='utf-8'))
    if any(not p.get('title') or not (p.get('url') or p.get('permalink')) for p in search):
        errors.append('Search index contains an unnamed or unlinked page')
    for error in errors:
        print(error)
    print(f'Checked {len(pages)} HTML pages, {sum(p.images for p in pages.values())} image references, '
          f'{len(sources)} Markdown files, {len(search)} search entries; {len(errors)} errors.')
    return bool(errors)


if __name__ == '__main__':
    sys.exit(main())
