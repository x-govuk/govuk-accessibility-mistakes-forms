---
layout: example
title: Do not use links in ‘aria-described’ areas like hint text
description: Fields that hack the GOV.UK pattern for hint text (which should be a paragraph of text only)
tags: "Code"
mistake:
- description: This example can happen when a question is 'one thing per page' or if multiple things are on a page.
  link: form-fields-hints-links/mistake
  reason: Hints (information between the input legend and the input field) must be simple without complex formatting or links. If extra formatting like lists and links are put in the hint area between an input legend and the input, a screenreader may not read them correctly.
- description:
  link: form-fields-hints-links/mistake-2
  reason: Hints within input fields will not be read by the screenreader
improvement:
- link: form-fields-hints-links/improved
  reason: Simple hints will be read out as expected by screen readers. If the input needs significant guidance and links, it should be rewritten as a complex question.

links:
    - text: Complex question pages on the GOV.UK Design system
      href: https://design-system.service.gov.uk/patterns/question-pages/#asking-complex-questions-without-using-hint-text
    - text: Making legends and labels headings on GOV.UK Design System
      href: https://design-system.service.gov.uk/get-started/labels-legends-headings/

---
