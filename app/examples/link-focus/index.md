---
layout: example
title: Do not forget link focus states
description: Links must be distinct when focused. THis is a WCAG requirement.
tags: "Code"
mistake:
- description: This example can happen with input fields that include saved information like a username, email address or password. Try this with a browser such as Safari.
  link: mistake
  height: 100px
  reason: If tabbing this example does not have a clear link focus
  code: '<p class="govuk-body"><a href="#">Link</a></p>'
improvement:
- link: improved
  height: 100px
  reason: The link now has a clear and accessible focus when tabbed. This fix is done by adding 'class="govuk-link"' to the link.
  code: '<p class="govuk-body"><a class="govuk-link" href="#">Link</a></p>'
links:
    - text: Autofill fields on the HTML specification
      href: https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill

---
