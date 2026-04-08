"""Tests to verify that doc pages are agent-friendly.

AI agents rely on semantic HTML to identify the main content of a page.
The <article> element is the standard way to mark up self-contained content
that can be independently distributed or reused (W3C HTML spec).

Without <article>, agents must guess which part of <main> is the actual
document content vs. navigation, breadcrumbs, sidebars, and other UI chrome.
"""

import re
from pathlib import Path

import pytest
from bs4 import BeautifulSoup


TEMPLATES_DIR = Path(__file__).resolve().parents[3] / "src" / "templates"
COMPONENTS_DIR = Path(__file__).resolve().parents[3] / "src" / "components"


def _read_jsx(filepath: Path) -> str:
    return filepath.read_text(encoding="utf-8")


class TestDocTemplateAgentFriendly:
    """Verify that doc templates wrap content in an <article> element."""

    def test_doc_template_uses_article_tag(self):
        """The doc template must wrap the MDX body in an <article> element.

        AI agents use <article> to locate the primary document content,
        distinguishing it from navigation, sidebars, and other page chrome.
        """
        source = _read_jsx(TEMPLATES_DIR / "doc.js")
        assert "<article" in source, (
            "doc.js must wrap the MDX content in an <article> element "
            "so that AI agents can identify the primary document content."
        )

    def test_learn_doc_template_uses_article_tag(self):
        """The learn-doc template must also wrap content in <article>."""
        learn_doc = TEMPLATES_DIR / "learn-doc.js"
        if not learn_doc.exists():
            pytest.skip("learn-doc.js template not found")
        source = _read_jsx(learn_doc)
        assert "<article" in source, (
            "learn-doc.js must wrap the MDX content in an <article> element "
            "so that AI agents can identify the primary document content."
        )

    def test_article_wraps_mdx_renderer_in_doc(self):
        """The <article> element must directly contain the MDXRenderer.

        This ensures the actual document content (not breadcrumbs or
        navigation) is what agents find inside <article>.
        """
        source = _read_jsx(TEMPLATES_DIR / "doc.js")
        # Check that MDXRenderer is inside an article element
        # Look for <article...> ... <MDXRenderer ... </article>
        article_block = re.search(
            r"<article[^>]*>.*?<MDXRenderer.*?</article>",
            source,
            re.DOTALL,
        )
        assert article_block is not None, (
            "The <article> element in doc.js must contain the <MDXRenderer> "
            "component so that the actual document content is semantically "
            "marked up for AI agents."
        )
