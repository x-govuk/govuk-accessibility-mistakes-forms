---
layout: example
title: Make sure that answers are connected to a question
description: Input fields separated too far from the initial question cause barriers for users who struggled to remember the question.
tags: "Design"
mistake:
    - description: This example can happen when showing information about a user that they need to check.
      link: complex-question/mistake
      reason: A complex question must have a header, information and then the question - without this it is difficult for screen readers to show that there is context or for people with memory issues to remember what is being asked.
    - description: This example can happen when showing information about a user that they need to check.
      link: complex-question/mistake-2
      reason: This example puts links between the fieldset and the radio buttons, meaning screen reader users are unlikely to get the link announced. It also causes issues for showing error messages.
improvement:
- link: complex-question/improved
  reason: Structuring the page to have header, details and question helps screen readers, audio announcers and general ease of memory. Links will also be announced by a screen reader before the question.
- link: complex-question/improved-2
  reason: This example reintroduced a clear fieldset header for the radio buttons, and also changes the existing fields to separate searching for an existing result with choosing one based on the previous information.
links:
    - text: Complex question pages on the GOV.UK Design system
      href: https://design-system.service.gov.uk/patterns/question-pages/#asking-complex-questions-without-using-hint-text

---
