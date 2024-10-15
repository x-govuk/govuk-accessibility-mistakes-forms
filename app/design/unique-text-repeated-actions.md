---
title: Do not forget unique text for repeated actions such as ‘Change’
description: Patterns that use link titles with the same name need extra attention to make sure they are still unique for screen readers.
related:
  title: Related links
  items:
    - text: Technique F6 - Failure due to the accessible name not containing the visible label text (WCAG 2.2)
      href: https://www.w3.org/WAI/WCAG22/Techniques/failures/F96.html
---

{% from "example/macro.njk" import appExample %}

[[toc]]

## Typical example that causes barriers

If patterns like ‘check answers’ are either coded bespoke (rather than using the GOV.UK Frontend macros) or not checked with screen readers, it may miss content needed for screen readers.

{{ appExample("unique-text-repeated-actions/mistake-2") }}

This makes it hard for screen reader users to know the difference between links, and also breaks WCAG standards.

## Improved version

The default macro has the necessary hidden text for links that are otherwise shown with the same text.

{{ appExample("unique-text-repeated-actions/improvement") }}

This correctly gives different distinctions for the links to screen reader users.
