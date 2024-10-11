---
title: Do not forget link focus states
description: Links must be distinct when focused and with sufficient colour contrast. This can get missed if manually rebuilding GOV.UK Frontend manually (for example if using a Javascript framework) or using an old version of GOV.UK Frontend.
related:
  title: Related links
  items:
    - text: Use sufficient colour contrast - older versions of GOV.UK Frontend (DWP Accessibility manual)
      href: https://accessibility-manual.dwp.gov.uk/guidance-for-your-job-role/interaction-designer#use-sufficient-colour-contrast
---

{% from "example/macro.njk" import appExample %}

> This mistake can mean a failure of [WCAG 2.2 2.4.7: Focus Visible (Level AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html)

[[toc]]

## Typical examples that cause barriers

### Example 1

This example is most likely to happen if the GOV.UK Frontend is being rebuilt in a codebase as an abstraction rather than using default templates.

{{ appExample("link-focus/mistake") }}

Not having `govuk-link` style or similar may mean a link does not have have sufficient contrast in the focus state.

### Example 2

If a service has not been updated for a while, its frontend may be out of date.

{{ appExample("link-focus/mistake-2") }}

Earlier versions of GOV.UK Frontend used a focus style that did not meet colour contrast standards. It has since been updated.

## Improved version

{{ appExample("link-focus/improved") }}

The link now has a clear and accessible focus when tabbed. This fix is done by adding `class="govuk-link"` to the link and making sure that the service is using a recent version of GOV.UK Frontend.
