const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')
const fs = require('node:fs')
const matter = require('gray-matter')
const nunjucks = require('nunjucks')
const beautify = require('js-beautify')

const getComponentContent = (componentName) => {
  const componentPath = `app/examples/${componentName}.njk`
  const componentFile = fs.readFileSync(componentPath, 'utf-8')
  const { content } = matter(componentFile)

  return content
}

module.exports = function (eleventyConfig) {
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

  /**
   * Fetch raw Nunjucks code for given `componentName` and return a string.
   *
   * This is needed as Nunjucks `include` tag parses included code, and
   * currently provides no way to fetch it un-rendered.
   * @param {string} componentName - Name of component
   * @returns {string} - Nunjucks template rendered as raw template
   * @see {@link https://github.com/mozilla/nunjucks/issues/788}
   */
  eleventyConfig.addNunjucksGlobal('getNunjucksCode', (componentName) => {
    const content = getComponentContent(componentName)

    // Remove `{% from "..." import ... %}` line as this is not needed by users
    const nunjucksCode = content.replaceAll(/{%\sfrom\s[^\n]+\n/g, '')

    // Use configured Markdown filter to generate syntax highlighted HTML
    const markdown = eleventyConfig.getFilter('markdown')
    return markdown(`\`\`\`js\n${nunjucksCode}\n\`\`\``)
  })

  /**
   * Fetch Nunjucks code for given `componentName` and return an HTML string.
   * @param {string} componentName - Name of component
   * @returns {string} - Nunjucks template rendered as HTML
   */
  eleventyConfig.addNunjucksGlobal('getHtmlCode', (componentName) => {
    const content = getComponentContent(componentName)

    // Create Nunjucks environment to render example as HTML
    const nunjucksEnv = nunjucks.configure([
      './node_modules/govuk-frontend/dist',
      './node_modules/@x-govuk/govuk-prototype-components'
    ])

    // Render HTML
    const html = nunjucksEnv.renderString(content).trim()

    // Beautify HTML code
    const htmlCode = beautify.html(html, {
      indent_size: 2,
      max_preserve_newlines: 0,
      wrap_attributes: 'preserve'
    })

    // Use configured Markdown filter to generate syntax highlighted HTML
    const markdown = eleventyConfig.getFilter('markdown')
    return markdown(`\`\`\`html\n${htmlCode}\n\`\`\``)
  })

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
