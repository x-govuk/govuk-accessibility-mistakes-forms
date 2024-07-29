---
layout: example
title: Form fields hint text with links or bullets
description: Fields that hack the GOV.UK pattern for hint text (which should be a paragraph of text only)
tags: "Code"
mistake:
  description: This example can happen when a question is 'one thing per page' or if multiple things are on a page.
  link: mistake
  height: 500px
  reason: Hints (information between the input legend and the input field) must be simple without complex formatting or links. If extra formatting like lists and links are put in the hint area between an input legend and the input, a screenreader may not read them correctly.

  code:  '        <div class="govuk-form-group">
        <h1 class="govuk-label-wrapper">
          <label class="govuk-label govuk-label--l" for="example">
          What is your Self Assessment Unique Taxpayer Reference (UTR)?
          </label>
        </h1>
        <div id="example-hint" class="govuk-hint">
          Your UTR can be 10 or 13 digits long. You can find it.
           <ul>
           <li>in your Personal Tax Account</li>
           <li>the HMRC app</li>
       <li>on tax returns and other documents from HMRC</li>
           </ul>
      It might be called ‘reference’, ‘UTR’ or ‘official use’. <a href="https://www.gov.uk/find-utr-number">How to find your UTR</a>
        </div>
        <input class="govuk-input" id="example" name="example" type="text" aria-describedby="example-hint">
      </div>

<button type="submit" class="govuk-button" data-module="govuk-button">
Continue
</button>


      </form>'
improvement:
  link: improved
  height: 450px
  reason: Simple hints will be read out as expected by screen readers. If the input needs significant guidance and links, it should be rewritten as a complex question.
  code: '<form class="form" action="/complex-question/accessible-explanation" method="post">





<h1 class="govuk-heading-l">
 Gender of the goose
</h1>


<p>If you can tell the gender of the goose, this will help us monitor the gender mix of the goose population.</p>
  <p>A male goose is normally larger than a female goose, has a deeper honk and may be more agressive.</p>








<div class="govuk-form-group">

  <fieldset class="govuk-fieldset">

    <legend class="govuk-fieldset__legend govuk-fieldset__legend--m">

      Do you know the gender of the goose?

    </legend>


    <div class="govuk-radios" data-module="govuk-radios">







      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="higher-further-education" name="higher-further-education" type="radio" value="Yes">
        <label class="govuk-label govuk-radios__label" for="higher-further-education">
          Yes
        </label>

      </div>








      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="higher-further-education-2" name="higher-further-education" type="radio" value="No">
        <label class="govuk-label govuk-radios__label" for="higher-further-education-2">
          No
        </label>

      </div>




    </div>

  </fieldset>

</div>














<button type="submit" class="govuk-button" data-module="govuk-button">
  Go to explanation of improvements
</button>


      </form>'

links:
    - text: Complex question pages on the GOV.UK Design system
      href: https://design-system.service.gov.uk/patterns/question-pages/#asking-complex-questions-without-using-hint-text
    - text: Making legends and labels headings on GOV.UK Design System
      href: https://design-system.service.gov.uk/get-started/labels-legends-headings/

---
