---
title: Do not omit autocomplete attributes on input fields
description: If you are asking for fields that people regularly complete, autocomplete helps them save time by helping their web browser guess the response.
related:
  title: Related links
  items:
    - text: Autofill fields on the HTML specification
      href: https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill
---

{% from "example/macro.njk" import example %}

> This mistake can mean a failure of [WCAG 2.2 1.3.5: Identify Input Purpose (Level AA)](https://www.w3.org/WAI/WCAG21/Understanding/identify-input-purpose)

[[toc]]

## Typical example that causes barriers

This example can happen with input fields that include saved information like a username, email address or password. Try this with a browser such as Safari.

{{ example("input-labels/mistake") }}

Without programmatic context, autofill can’t guess as to what the field is.

## Improved version

{{ example("input-labels/improved") }}

Using autocomplete means that any saved fields are more likely to be correctly suggested.
