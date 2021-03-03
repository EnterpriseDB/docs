import scrapy
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor

class MySpider(CrawlSpider):
    name = 'legacy_docs'
    allowed_domains = ['enterprisedb.com']
    start_urls = ['http://www.enterprisedb.com/edb-docs/']

    rules = (
      Rule(
        LinkExtractor(
          deny_extensions=scrapy.linkextractors.IGNORED_EXTENSIONS + ['epub'],
          deny=r'\/d\/postgresql\/' # skip the postresql docs, there are a LOT of them and it slows this down significantly
        ),
        callback='dump',
        follow=True
      ),
    )

    def dump(self, response):
      nav_links = response.css('.doc-nav a::text').getall()
      sub_nav = response.css('div.related')
      if len(sub_nav) > 0:
        sub_nav = sub_nav[0].css('li.nav-item a::text').getall()
      else: # try "old" webwork style subnav
        sub_nav = response.css('.WebWorks_Breadcrumbs')
        if len(sub_nav) > 0:
          sub_nav = sub_nav[0].css('*::text').getall()

      nav = response.css('.doc-nav *::text').getall()
      cleaned_nav = [];
      for text in nav:
        if 'Other versions of this page' in text:
          break
        cleaned_text = text.replace('→','').strip()
        if len(cleaned_text) > 0:
          cleaned_nav.append(cleaned_text)

      product = None
      if len(nav_links) > 0:
        product = nav_links[0]

      version = None
      if len(nav_links) > 1:
        version = nav_links[1]

      if not product and not version:
        product_text = response.css('.thead-light h3::text').getall()
        if len(product_text) > 0 and len(product_text[0]) > 0:
          product = product_text[0].strip()
        version_text = response.css('.thead-light .text-muted::text').getall()
        if len(version_text) > 0 and len(version_text[0]) > 0:
          version = version_text[0].replace('Version: ', '').strip()

      yield {
        'product': product,
        'version': version,
        'nav': cleaned_nav,
        'sub_nav': list(map(str.strip, sub_nav)),
        'title': response.css('title::text').get(),
        'url': response.url,
      }
