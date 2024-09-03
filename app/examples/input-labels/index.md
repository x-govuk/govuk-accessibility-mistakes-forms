---
layout: example
title: Do not omit autocomplete attributes on input fields
description: If you are asking for fields that people regularly complete, autocomplete helps them save time by helping their web browser guess the response.
tags: "Code"
mistake:
- description: This example can happen with input fields that include saved information like a username, email address or password. Try this with a browser such as Safari.
  link: mistake
  height: 700px
  reason: Without programatic context, autofill can't guess as to what the field is.
improvement:
- link: improved
  height: 700px
  reason: Using autocomplete means that any saved fields are more likely to be correctly suggested.

links:
    - text: Autofill fields on the HTML specification
      href: https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill

---
