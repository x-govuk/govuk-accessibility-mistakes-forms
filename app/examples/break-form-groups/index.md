---
layout: example
title: Do not split up expected form groupings
description: Some groupings like username and password are so commonly expected that both people and browsers can struggle if they are changed.
tags: "Design"
mistake:
    - description: This can happen if systems have non-standard patterns, for example needing extra details to sign in.
      link: break-form-groups/mistake
      reason: This will not work at all without autocomplete tagging (as mentioned in coding mistakes). However, even with autocomplete examples, this breaks user mental models for account fields, and also means browsers may have unexpected results.  
improvement:
- link: break-form-groups/improved
  reason: Restructuring the input fields to follow existing form grouping means both people and browers are more likely to be able to correctly input the fields.
links:
    - text: Complex question pages on the GOV.UK Design system
      href: https://design-system.service.gov.uk/patterns/question-pages/#asking-complex-questions-without-using-hint-text

---
