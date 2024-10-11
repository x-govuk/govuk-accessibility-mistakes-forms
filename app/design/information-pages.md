---
title: Do not use a question as a heading unless a user can answer it on the page
description: If you put a question in a form page, it needs to have a way for a user to answer it.
related:
  title: Related links
  items:
    - text: NHS service manual on how to write good questions for forms
      href: https://service-manual.nhs.uk/content/how-to-write-good-questions-for-forms
---

{% from "example/macro.njk" import appExample %}

[[toc]]

## Typical example that causes barriers

{{ appExample("information-pages/mistake") }}

In this example, 'can you apply' is just a heading. The only options are to 'continue' or 'return to GOV'UK' - neither of which answers the question. Another better option is to turn this into an actual question with answers.

## Improved versions

### Improvement 1

If possible, ask multiple conditions with multiple questions that people can work through.

{{ appExample("information-pages/improved") }}

Rewriting the header to be a sentence makes it clear that the user does not have to answer anything.

### Improvement 2

If the question cannot be made into multiple input fields (for example because the information cannot be used again, therefore breaking other WCAG rules) the question can be changed into a complex question.

{{ appExample("information-pages/improved-2") }}

This still allows the page to have a question that can be answered.
