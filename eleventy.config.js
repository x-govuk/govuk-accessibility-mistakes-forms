import { govukEleventyPlugin } from '@x-govuk/govuk-eleventy-plugin'

import { getHtmlCode, getNunjucksCode } from './lib/nunjucks.js'

const serviceName = 'Fix Common Accessibility Mistakes'

export default function (eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(govukEleventyPlugin, {
    icons: {
      mask: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-icon-mask.svg?raw=true',
      shortcut:
        'https://raw.githubusercontent.com/x-govuk/logo/main/images/favicon.ico',
      touch:
        'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-icon-180.png'
    },
    opengraphImageUrl:
      'https://x-govuk.github.io/govuk-accessibility-mistakes-forms/assets/opengraph-image.png',
    themeColor: '#2288aa',
    titleSuffix: serviceName,
    homeKey: serviceName,
    showBreadcrumbs: false,
    headingPermalinks: true,
    url:
      process.env.GITHUB_ACTIONS &&
      'https://x-govuk.github.io/govuk-accessibility-mistakes-forms/',
    stylesheets: ['/assets/application.css'],
    header: {
      homepageUrl: 'https://x-govuk.github.io'
    },
    serviceNavigation: {
      serviceName,
      serviceUrl: process.env.GITHUB_ACTIONS ? '/govuk-eleventy-plugin/' : '/',
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
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
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
    },
    pathPrefix: process.env.GITHUB_ACTIONS
      ? '/govuk-accessibility-mistakes-forms/'
      : '/'
  }
}
