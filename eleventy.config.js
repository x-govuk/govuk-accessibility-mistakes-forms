const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')
/*
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const { readFileSync } = require('fs') */
const syntaxHighlightPlugin = require('@11ty/eleventy-plugin-syntaxhighlight');



module.exports = function(eleventyConfig) {
  // Register the plugin
  eleventyConfig.addPlugin(syntaxHighlightPlugin);
  eleventyConfig.addPlugin(govukEleventyPlugin, {
 // add customisations here - uncomment next areas for examples
    icons: {
      mask: 'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-mask-icon.svg?raw=true',
      shortcut:
        'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-favicon.ico',
      touch:
        'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-apple-touch-icon.png'
    },
    opengraphImageUrl:
      'https://raw.githubusercontent.com/x-govuk/logo/main/images/x-govuk-opengraph-image.png',
    feedUrl: 'feed.xml',
    homeKey: 'Fix common form accessibility issues',
    titleSuffix: 'Fix common form accessibility issues',
    parentSite: {
     url: 'https://x-govuk.github.io/#projects',
     name: 'All X-GOVUK projects'
   },
    headingPermalinks: true,
    header: {
      logotype: 'x-govuk',
      productName: 'Fix common form accessibility issues',
      search: {
        indexPath: '/search.json',
        sitemapPath: '/sitemap'
      }
    },

/*     navigation: {
      visuallyHiddenTitle: "Menu",
      items: [ {text: "Examples", href: "/examples/index"  } ]
    }, */

    footer: {
      meta: {
        items: [
          {
            href: "/accessibility-statement",
            text: "Accessibility statement"
          },
          {
            href: "/cookies",
            text: "Cookies"
          },
          {
            href: "/sitemap",
            text: "Sitemap"
          }
    ],
    html: '<strong class="govuk-tag govuk-phase-banner__content__tag">Beta</strong>This is a new unofficial community project - <a class="govuk-footer__link" href="/project-history">view project history</a> or <a class="govuk-footer__link" href="https://github.com/vickytnz/xgov-accessibility">source code</a>'
  },

                  contentLicence: {
                    html: 'This site  is licenced under a Creative Commons <a class="govuk-footer__link" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">Attribution-NonCommercial-ShareAlike</a> 4.0 International license'
          },
          copyright: {
            text: '@X-GOVUK'
          }
        }



  })

/*
  eleventyConfig.addNunjucksShortcode("getHTMLCode", function(component) {

    // Path to the button component file.
     const filePath = path.join(__dirname, component.url);
     // If the file doesn't exist, render nothing.
     if (!fs.existsSync) {
       return "";
     }
     // If the file does exist, read it.
     const content = fs.readFileSync(filePath).toString();
     // Tell nunjucks to render the file's content, passing the
     // arguments to it as the "component" object.
     return nunjucks.renderString(content).trim()

   });

*/

// Filters


  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      // The folder where all your content will live:
      input: 'app',
      // Use layouts from the plugin
      //layouts: '../node_modules/@x-govuk/govuk-eleventy-plugin/layouts',
      layouts: "_layouts" /* ,
      includes: '_components' */
    },
    pathPrefix: process.env.GITHUB_ACTIONS ? '/form-accessibility-issues/' : '/'

  }
};
