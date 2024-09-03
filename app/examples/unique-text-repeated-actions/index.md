---
layout: example
title: Do not forget unique text for repeated actions such as 'Change'
description: Patterns that use link titles with the same name need extra attention.
tags: "Design"
mistake:
- link: mistake
  description: If patterns like 'check answers' are either coded bespoke (rather than using the GOV.UK Frontend macros) or not checked with screen readers, it may miss content needed for screen readers.
  height: 350px
  reason: This makes it hard for screen reader users to know the difference between links, and also breaks WCAG standards.
  code: '<dl class="govuk-summary-list">

  <div class="govuk-summary-list__row">

    <dt class="govuk-summary-list__key">
      Name
    </dt>

    <dd class="govuk-summary-list__value">
      Sarah Philips
    </dd>

    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="#">Change</a>
    </dd>

  </div>

  <div class="govuk-summary-list__row">

    <dt class="govuk-summary-list__key">
      Date of birth
    </dt>

    <dd class="govuk-summary-list__value">
      5 January 1978
    </dd>

    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="#">Change</a>
    </dd>

  </div>

  <div class="govuk-summary-list__row">

    <dt class="govuk-summary-list__key">
      Address
    </dt>

    <dd class="govuk-summary-list__value">
      72 Guild Street<br>London<br>SE23 6FH
    </dd>

    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="#">Change</a>
    </dd>

  </div>

  <div class="govuk-summary-list__row">

    <dt class="govuk-summary-list__key">
      Contact details
    </dt>

    <dd class="govuk-summary-list__value">

      <p class="govuk-body">07700 900457</p>

      <p class="govuk-body">sarah.phillips@example.com</p>
    </dd>

    <dd class="govuk-summary-list__actions">

      <ul class="govuk-summary-list__actions-list">

        <li class="govuk-summary-list__actions-list-item">

          <a class="govuk-link" href="#">Add</a>

        </li>

        <li class="govuk-summary-list__actions-list-item">

          <a class="govuk-link" href="#">Change</a>

        </li>

      </ul>

    </dd>

  </div>

</dl>'
improvement:
- link: improved
  description: The default macro has the necessary hidden text for links that are otherwise shown with the same text.
  height: 350px
  reason: This correctly gives different distinctions for the links to screen reader users.
  code: '<dl class="govuk-summary-list">

  <div class="govuk-summary-list__row">

    <dt class="govuk-summary-list__key">
      Name
    </dt>

    <dd class="govuk-summary-list__value">
      Sarah Philips
    </dd>

    <dd class="govuk-summary-list__actions">

      <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> name</span></a>
    </dd>

  </div>

  <div class="govuk-summary-list__row">

    <dt class="govuk-summary-list__key">
      Date of birth
    </dt>

    <dd class="govuk-summary-list__value">
      5 January 1978
    </dd>

    <dd class="govuk-summary-list__actions">

      <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> date of birth</span></a>
    </dd>

  </div>

  <div class="govuk-summary-list__row">

    <dt class="govuk-summary-list__key">
      Address
    </dt>

    <dd class="govuk-summary-list__value">
      72 Guild Street<br>London<br>SE23 6FH
    </dd>

    <dd class="govuk-summary-list__actions">
      <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> address</span></a>
    </dd>

  </div>

  <div class="govuk-summary-list__row">

    <dt class="govuk-summary-list__key">
      Contact details
    </dt>

    <dd class="govuk-summary-list__value">

      <p class="govuk-body">07700 900457</p>

      <p class="govuk-body">sarah.phillips@example.com</p>

    </dd>

    <dd class="govuk-summary-list__actions">

      <ul class="govuk-summary-list__actions-list">

        <li class="govuk-summary-list__actions-list-item">

          <a class="govuk-link" href="#">Add<span class="govuk-visually-hidden"> contact details</span></a>
        </li>

        <li class="govuk-summary-list__actions-list-item">

          <a class="govuk-link" href="#">Change<span class="govuk-visually-hidden"> contact details</span></a>
        </li>

      </ul>

    </dd>

  </div>

</dl>'
links:
- text: Technique F6 - Failure due to the accessible name not containing the visible label text (WCAG 2.2)
  href: https://www.w3.org/WAI/WCAG22/Techniques/failures/F96.html
---
