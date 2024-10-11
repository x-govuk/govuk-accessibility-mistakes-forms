---
title: Avoid tabs for complex content
description: The primary use case for tabs is when one set of information is far more important than others and does not need to be compared.
related:
  title: Related links
  items:
    - text: Tab (when not to use this content) in the GOV.UK Design System
      href: https://design-system.service.gov.uk/components/tabs/#when-not-to-use-this-component
    - text: Don't be afraid of the big long page by Amy Hupe and Caroline Jarrett
      href: https://amyhupe.co.uk/articles/dont-be-afraid-of-the-big-long-page/
    - text: Definition lists information in the GOV.UK Design system
      href: https://design-system.service.gov.uk/components/summary-list/
    - text: Tabs, Used Right on NN/g
      href: https://www.nngroup.com/articles/tabs-used-right/
---

{% from "example/macro.njk" import appExample %}

[[toc]]

## Typical example that causes barriers

Tabs can be mistakenly used for scenarios where people need to compare details across tabs.

{{ appExample("tabs/mistake") }}

Tabs, like accordions, can be a symptom of unstructured content design. It also does not act as a tab in mobile view so is a unequal experience.

## Improved version

{{ appExample("tabs/improved") }}

Using a definition list means that what is visually shown on the page is more aligned with what is read out on a screen reader.
