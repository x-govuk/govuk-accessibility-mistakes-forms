const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')

module.exports = function(eleventyConfig) {
  // Register the plugin
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
    homeKey: 'Accessible form design',
    titleSuffix: 'Accessible form design',
    parentSite: {
     url: 'https://x-govuk.github.io/#projects',
     name: 'X-GOVUK projects'
   },
    headingPermalinks: true,
    header: {
      logotype: 'x-govuk',
      productName: 'Accessible form design',
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
            href: "#",
            text: "Item 1"
          },
          {
            href: "#",
            text: "Item 2"
          },
      {
        href: "https://github.com",
        text: "Github"
      }
    ]
},
          contentLicence: {
            html: 'An unofficial community project, begun by Vicky Teinaki, Caroline Jarrett and Lori Thomson.'
          },
          copyright: {
            text: '@X-GOVUK'
          }
        }

  })


  return {
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    markdownTemplateEngine: 'njk',
    dir: {
      // The folder where all your content will live:
      input: 'app',
      // Use layouts from the plugin
      //layouts: '../node_modules/@x-govuk/govuk-eleventy-plugin/layouts',
      layouts: "_layouts"
    }
  }
};
