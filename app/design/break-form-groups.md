---
title: Do not split up expected form groupings
description: Some groupings like username and password are so commonly expected that both people and browsers can struggle if they are changed.
related:
  title: Related links
  items:
    - text: Complex question pages on the GOV.UK Design System
      href: https://design-system.service.gov.uk/patterns/question-pages/#asking-complex-questions-without-using-hint-text
---

{% from "example/macro.njk" import appExample %}

[[toc]]

## Typical example that causes barriers

This can happen if systems have non-standard patterns, for example needing extra details to sign in.

{{ appExample("break-form-groups/mistake") }}

This will not work at all without autocomplete tagging (as mentioned in coding mistakes). However, even with autocomplete examples, this breaks user mental models for account fields, and also means browsers may have unexpected results.

## Improved version

{{ appExample("break-form-groups/improved") }}

Restructuring the input fields to follow existing form grouping means both people and browsers are more likely to be able to correctly input the fields.
