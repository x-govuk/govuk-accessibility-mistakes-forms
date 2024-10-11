---
layout: page
title: Accordions create extra work
description: Accordions can either hide information that needs to be split over pages for easier reading, or unnecessarily hide key information that can be written concisely.
tags: "Design"
related:
  title: Related links
  items:
    - text: Accordions on the GOV.UK Design System
      href: https://design-system.service.gov.uk/components/accordion/
    - text: Don't be afraid of the big long page by Amy Hupe and Caroline Jarrett
      href: https://amyhupe.co.uk/articles/dont-be-afraid-of-the-big-long-page/
    - text: NHS service manual on how to write good questions for forms
      href: https://service-manual.nhs.uk/content/how-to-write-good-questions-for-forms
---

{% from "example/macro.njk" import example %}

[[toc]]

## Typical example that causes barriers

This example can happen when showing information about a user that they need to check.

{{ example("work-accordions/mistake") }}

Accordions hide key information that may be necessary for everyone. While there may be uses for accordions in some scenarios like case working systems, generally it is better to start by either no content and adding when there is a need, or all content and using headers, links and occasional details text.

## Improved version

{{ example("work-accordions/improved") }}

Showing information as a start helps everyone get the information - if there is too much information then the page needs to be redesigned.
