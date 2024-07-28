---
layout: example
title: Coding lists as tables
description: Using tables instead of definition lists creates noise for screen reader users.
tags: "Code"
mistake:
  description: This example can happen when showing information about a user that they need to check.
  link: /examples/list/mistake
  height: 700px
  reason: This is coded as a table rather than a definition list. Table are far more 'noisy' for screen reader users as they read out row and columns, and the table caption doubling as a page title may also confuse sighted screen reader users.
  code:  '<table class="govuk-table">
         <caption class="govuk-table__caption govuk-table__caption--l">Check previous details</caption>
           <tbody class="govuk-table__body">
             <tr class="govuk-table__row">
               <th scope="row" class="govuk-table__header">Name</th>
               <td class="govuk-table__cell">Sarah Philips</td>
            </tr>
            <tr class="govuk-table__row">
              <th scope="row" class="govuk-table__header">Date of birth</th>
              <td class="govuk-table__cell">5 January 1978</td>
            </tr>
            <tr class="govuk-table__row">
              <th scope="row" class="govuk-table__header">Address</th>
              <td class="govuk-table__cell">72 Guild Street<br>London<br>SE23 6FH</td>
            </tr>
            <tr class="govuk-table__row">
              <th scope="row" class="govuk-table__header">Contact details</th>
              <td class="govuk-table__cell"><p class="govuk-body">07700 900457</p><p class="govuk-body">sarah.phillips@example.com</p></td>
            </tr>
          </tbody>
        </table>'
improvement:
  link: /examples/list/improved
  height: 600px
  reason: Using a definition list means that what is visually shown on the page is more aligned with what is read out on a screen reader.
  code: '<main class="govuk-main-wrapper" id="main-content">





<span class="govuk-caption-xl">
          Improved version
        </span>



        <dl class="govuk-summary-list">


    <div class="govuk-summary-list__row">
      <dt class="govuk-summary-list__key">
        Name
      </dt>
      <dd class="govuk-summary-list__value">
        Sarah Philips
      </dd>

    </div>



    <div class="govuk-summary-list__row">
      <dt class="govuk-summary-list__key">
        Date of birth
      </dt>
      <dd class="govuk-summary-list__value">
        5 January 1978
      </dd>

    </div>



    <div class="govuk-summary-list__row">
      <dt class="govuk-summary-list__key">
        Address
      </dt>
      <dd class="govuk-summary-list__value">
        72 Guild Street<br>London<br>SE23 6FH
      </dd>

    </div>



    <div class="govuk-summary-list__row">
      <dt class="govuk-summary-list__key">
        Contact details
      </dt>
      <dd class="govuk-summary-list__value">
        <p class="govuk-body">07700 900457</p><p class="govuk-body">sarah.phillips@example.com</p>
      </dd>

    </div>


  </dl>

  <div class="govuk-form-group">

  <fieldset class="govuk-fieldset">
    <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">
      Are these details correct?
    </legend>
    <div class="govuk-radios" data-module="govuk-radios">
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="details" name="details" type="radio" value="yes">
        <label class="govuk-label govuk-radios__label" for="details">
          Yes
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="details-2" name="details" type="radio" value="no">
        <label class="govuk-label govuk-radios__label" for="details-2">
          No
        </label>
      </div>
    </div>
  </fieldset>

</div>


<button type="submit" class="govuk-button" data-module="govuk-button">
  Save and continue
</button>



        </main>'

links:
    - text: Tables information in the GOV.UK Design System
      href: https://design-system.service.gov.uk/components/table/
    - text: Definition lists information in the GOV.UK Design system
      href: https://design-system.service.gov.uk/components/summary-list/

---