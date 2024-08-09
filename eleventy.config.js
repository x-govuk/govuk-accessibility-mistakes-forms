const govukEleventyPlugin = require('@x-govuk/govuk-eleventy-plugin')
const fs = require('fs')
const matter = require('gray-matter')
const beautify = require('js-beautify')
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


  }),

// Filters

eleventyConfig.addFilter("color", function(string, color) {
   return `<span style="color: ${color}">${string}</span>`;
 }),

/*
  eleventyConfig.addFilter("getHTMLCode",  function(path) {
      const { content } = matter(fs.readFileSync(path, 'utf-8'))

        let html = ''
          try {
            html = nunjucks.renderString(content).trim()
        } catch (error) {
        console.log(`Could not get HTML code from ${path}`)
      }

      const options = beautify.html.defaultOptions()

      return beautify.html(html, {
        indent_size: 2,
        // Ensure nested labels in headings are indented properly
        inline: options.inline.filter((tag) => !['label'].includes(tag)),
        // Remove blank lines
        max_preserve_newlines: 0,
        // Ensure attribute wrapping in header SVG is preserved
        wrap_attributes: 'preserve'
})
}), */
eleventyConfig.addFilter("getHTMLCode",  function(path) {

fs.readFile(path, 'utf8', function (err, data) {
    if (err) {
        throw err;
    }
    return beautify(data, { indent_size: 2, space_in_empty_paren: true });
})
}),

eleventyConfig.addFilter("beautify",  function(path) {
    return beautify(path, { indent_size: 2, space_in_empty_paren: true });
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
      layouts: "_layouts" /* ,
      includes: '_components' */
    }
  }
};
