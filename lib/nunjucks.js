import fs from 'node:fs'

import matter from 'gray-matter'
import beautify from 'js-beautify'
import nunjucks from 'nunjucks'

const getComponentContent = (componentName) => {
  const componentPath = `app/examples/${componentName}.njk`
  const componentFile = fs.readFileSync(componentPath, 'utf-8')
  const { content } = matter(componentFile)

  return content
}

/**
 * Fetch raw Nunjucks code for given `componentName` and return a string.
 *
 * This is needed as Nunjucks `include` tag parses included code, and
 * currently provides no way to fetch it un-rendered.
 *
 * @param {string} componentName - Name of component
 * @returns {string} - Nunjucks template rendered as raw template
 * @see {@link https://github.com/mozilla/nunjucks/issues/788}
 */
export function getNunjucksCode(componentName) {
  const content = getComponentContent(componentName)

  // Remove `{% from "..." import ... %}` line as this is not needed by users
  const nunjucksCode = content.replaceAll(/{%\sfrom\s[^\n]+\n/g, '')

  return nunjucksCode
}

/**
 * Fetch Nunjucks code for given `componentName` and return an HTML string
 *
 * @param {string} componentName - Name of component
 * @returns {string} - Nunjucks template rendered as HTML
 */
export function getHtmlCode(componentName) {
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

  return htmlCode
}
