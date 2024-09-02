---
layout: example
title: Do not forget unique text for repeated actions such as 'Change'
description: Do not surprise people when a link breaks recommended behaviour to open in the same tab.
tags: "Design"
mistake:
- link: mistake
  height: 100px
  reason: If there are many links it can seem templting to try and scope the description in a statement and visually hide other options. This gives an unequal experience in that screen readers get both sets of text.
  code: '<p class="govuk-body"><a href="#">Link</a></p>'
improvement:
- link: improved
  height: 100px
  reason: Adding all links as an option gives an equal experience. If there are issues with opening links in the same tab, then this is a root cause problem of technology decisions rather than one of noise.
  code: '<p class="govuk-body"><a class="govuk-link" href="#">Link</a></p>'
---
