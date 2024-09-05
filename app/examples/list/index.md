---
layout: example
title: Do not code lists as tables
description: Using tables instead of definition lists creates noise for screen reader users.
tags: "Code"
mistake:
- description: This example can happen when showing information about a user that they need to check.
  link: list/mistake
  reason: This is coded as a table rather than a definition list. Tables are far more 'noisy' for screen reader users as they read out row and columns. The table caption doubling as a page title can also confuse sighted screen reader users.

improvement:
- link: list/improved
  reason: Using a definition list means that what is visually shown on the page is more aligned with what is read out on a screen reader.
links:
    - text: Tables information in the GOV.UK Design System
      href: https://design-system.service.gov.uk/components/table/
    - text: Definition lists information in the GOV.UK Design system
      href: https://design-system.service.gov.uk/components/summary-list/

---
