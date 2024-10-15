import govukEleventyPlugin from '@x-govuk/govuk-eleventy-plugin'
import { getHtmlCode, getNunjucksCode } from './lib/nunjucks.js'

export default function (eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    icons: {
      mask: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-mask-icon.svg?raw=true',
      shortcut:
        'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-favicon.ico',
      touch:
        'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-apple-touch-icon.png'
    },
    opengraphImageUrl:
      'https://x-govuk.github.io/govuk-accessibility-mistakes-forms/assets/opengraph-image.png',
    homeKey: 'Fix Common Accessibility Mistakes',
    titleSuffix: 'Fix Common Accessibility Mistakes',
    parentSite: {
      url: 'https://x-govuk.github.io/#projects',
      name: 'All X-GOVUK projects'
    },
    url:
      process.env.GITHUB_ACTIONS &&
      'https://x-govuk.github.io/govuk-accessibility-mistakes-forms/',
    headingPermalinks: true,
    header: {
      logotype: 'x-govuk',
      productName: 'Fix Common Accessibility Mistakes',
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap',
        label: 'Search examples'
      }
    },
    footer: {
      meta: {
        items: [
          {
            href: '/accessibility-statement',
            text: 'Accessibility statement'
          },
          {
            href: '/cookies',
            text: 'Cookies'
          },
          {
            href: '/sitemap',
            text: 'Sitemap'
          }
        ],
        html: '<strong class="govuk-tag govuk-phase-banner__content__tag">Beta</strong>This is an unofficial community project. View <a class="govuk-footer__link" href="/project-history">project history</a>, <a class="govuk-footer__link" href="https://github.com/x-govuk/govuk-accessibility-mistakes-forms">source code</a> or find out how to <a class="govuk-footer__link" href="/contribute">contribute</a>.'
      },
      contentLicence: {
        html: 'This site is licenced under a Creative Commons <a class="govuk-footer__link" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Attribution-NonCommercial-ShareAlike</a> 4.0 International license'
      },
      copyright: {
        text: '© X-GOVUK'
      }
    }
  })

  // Globals
  eleventyConfig.addNunjucksGlobal('getNunjucksCode', getNunjucksCode)
  eleventyConfig.addNunjucksGlobal('getHtmlCode', getHtmlCode)

  // Passthrough
  eleventyConfig.addPassthroughCopy('./app/assets')
  eleventyConfig.addPassthroughCopy({
    './node_modules/iframe-resizer/js/*.js': './assets'
  })

  // Filters
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      layouts: '_layouts',
      includes: '_components'
    },
    pathPrefix: process.env.GITHUB_ACTIONS
      ? '/govuk-accessibility-mistakes-forms/'
      : '/'
  }
}
