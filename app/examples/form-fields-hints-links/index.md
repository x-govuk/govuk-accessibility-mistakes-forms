---
layout: example
title: Links in hint text confuse screen readers
description: Fields that hack the GOV.UK pattern for hint text (which should be a paragraph of text only)
tags: "Code"
mistake:
- description: This example can happen when a question is 'one thing per page' or if multiple things are on a page.
  link: mistake
  height: 500px
  reason: Hints (information between the input legend and the input field) must be simple without complex formatting or links. If extra formatting like lists and links are put in the hint area between an input legend and the input, a screenreader may not read them correctly.
- description:
  link: mistake-2
  height: 400px
  reason: Hints within input fields will not be read by the screenreader
improvement:
- link: improved
  height: 450px
  reason: Simple hints will be read out as expected by screen readers. If the input needs significant guidance and links, it should be rewritten as a complex question.

links:
    - text: Complex question pages on the GOV.UK Design system
      href: https://design-system.service.gov.uk/patterns/question-pages/#asking-complex-questions-without-using-hint-text
    - text: Making legends and labels headings on GOV.UK Design System
      href: https://design-system.service.gov.uk/get-started/labels-legends-headings/

---
