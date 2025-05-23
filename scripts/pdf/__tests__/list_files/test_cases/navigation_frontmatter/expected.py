from pathlib import Path

from .....generate_pdf import TocItem

expected = [
    TocItem(filename=Path(__file__).parent / "index.mdx", chapter=[1]),
    TocItem(filename=Path(__file__).parent / "2.mdx", chapter=[2]),
    TocItem(filename=Path(__file__).parent / "2.1/2.1.mdx", chapter=[3]),
    TocItem(filename=Path(__file__).parent / "1.mdx", chapter=[4]),
]
