import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

import { getHtmlCode, getNunjucksCode } from './lib/nunjucks.js'

const serviceName = 'Fix Common Accessibility Mistakes'

export default function (eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
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
        html: '<strong class="govuk-tag govuk-phase-banner__content__tag">Beta</strong>This is an unofficial community project. View <a class="govuk-footer__link" href="/project-history">project history</a>, <a class="govuk-footer__link" href="https://github.com/x-govuk/fix-common-accessibility-mistakes">source code</a> or find out how to <a class="govuk-footer__link" href="/contribute">contribute</a>.'
      },
      contentLicence: {
        html: 'This site is licenced under a Creative Commons <a class="govuk-footer__link" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Attribution-NonCommercial-ShareAlike</a> 4.0 International license'
      },
      copyright: {
        text: '© X-GOVUK'
      }
    },
    icons: {
      mask: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-icon-mask.svg?raw=true',
      shortcut:
        'https://raw.githubusercontent.com/x-govuk/logo/main/images/favicon.ico',
      touch:
        'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-icon-180.png'
    },
    opengraphImageUrl:
      'https://fix-common-accessibility-mistakes.x-govuk.org/assets/opengraph-image.png',
    header: {
      homepageUrl: 'https://x-govuk.org'
    },
    headingPermalinks: true,
    homeKey: serviceName,
    serviceNavigation: {
      serviceName,
      serviceUrl: '/',
      navigation: [
        {
          text: 'Design',
          href: '/design'
        },
        {
          text: 'Code implementation',
          href: '/code'
        }
      ],
      search: {
        label: 'Search examples',
        indexPath: '/search-index.json',
        sitemapPath: '/sitemap'
      }
    },
    showBreadcrumbs: false,
    stylesheets: ['/assets/application.css'],
    themeColor: '#2288aa',
    titleSuffix: serviceName
  })

  // Globals
  eleventyConfig.addNunjucksGlobal('getNunjucksCode', getNunjucksCode)
  eleventyConfig.addNunjucksGlobal('getHtmlCode', getHtmlCode)

  // Passthrough
  eleventyConfig.addPassthroughCopy('./app/assets')
  eleventyConfig.addPassthroughCopy({
    './node_modules/iframe-resizer/js/*.js': './assets'
  })

  // Enable X-GOVUK brand
  eleventyConfig.addNunjucksGlobal('xGovuk', true)

  // Filters
  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      input: 'app',
      layouts: '_layouts',
      includes: '_components'
    }
  }
}
