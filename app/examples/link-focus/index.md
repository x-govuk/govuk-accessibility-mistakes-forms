---
layout: example
title: Do not forget link focus states
description: Links must be distinct when focused and with sufficient colour contrast. This is a WCAG requirement.
tags: "Code"
mistake:
- link: mistake
  height: 100px
  description: This example is most likely to happen if the GOV.UK Frontend is being rebuilt in a codebase as an abstraction rather than using default templates.
  reason: Not having 'govuk-link' style or similar may mean a link does not have have sufficient contrast in the focus state.
  code: '<p class="govuk-body"><a href="#">Link</a></p>'
- link: mistake-2
  height: 100px
  description: If a service has not been updated for a while, its frontend may be out of date.
  reason: Earlier versions of GOV.UK Frontend used a focus style that did not meet colour contrast standards. It has since been updated.
  code: '<p class="govuk-body"><a href="#">Link</a></p>'

improvement:
- link: improved
  height: 100px
  reason: The link now has a clear and accessible focus when tabbed. This fix is done by adding 'class="govuk-link"' to the link and making sure that the service is using a recent version of GOV.UK Frontend.
  code: '<p class="govuk-body"><a class="govuk-link" href="#">Link</a></p>'
links:
    - text: Use sufficient colour contrast - older versions of GOV.UK Frontend (DWP Accessibility manual)
      href: https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/interaction-designer#use-sufficient-colour-contrast

---
