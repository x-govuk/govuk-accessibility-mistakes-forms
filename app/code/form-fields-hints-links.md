---
title: Do not use links in aria-described areas like hint text
description: Areas of GOV.UK component that use `aria-described` such as hint text are designed to be a single paragraph of text. Changing this can cause accessibility issues. 
related:
  title: Related links
  items:
    - text: Complex question pages on the GOV.UK Design system
      href: https://design-system.service.gov.uk/patterns/question-pages/#asking-complex-questions-without-using-hint-text
    - text: Making legends and labels headings on GOV.UK Design System
      href: https://design-system.service.gov.uk/get-started/labels-legends-headings/
---

{% from "example/macro.njk" import example %}

[[toc]]

## Typical example that causes barriers

This example can happen when a question is ‘one thing per page’ or if multiple things are on a page.

{{ example("form-fields-hints-links/mistake") }}

Hints (information between the input legend and the input field) must be simple without complex formatting or links. If extra formatting like lists and links are put in the hint area between an input legend and the input, a screen reader may not read them correctly.

{{ example("form-fields-hints-links/mistake-2") }}

Hints within input fields will not be read by the screen reader

## Improved version

{{ example("form-fields-hints-links/improved") }}

Simple hints will be read out as expected by screen readers. If the input needs significant guidance and links, it should be rewritten as a complex question.
