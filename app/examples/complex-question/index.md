---
layout: example
title: Make sure that answers are connected to a question
description: When a question is too complex to allow for a 1 paragraph description, other approaches are required.
tags: "Design"
mistake:
    - description: This example can happen when showing information about a user that they need to check.
      link: /examples/complex-question/mistake
      height: 400px
      reason: A complex question must have a header, information and then the question - without this it is difficult for screen readers to show that there is context or for people with memory issues to remember what is being asked.
      code:  '<form class="form" action="/complex-question/original-explanation" method="post">
      <h1 class="govuk-heading-l">
        Do you know the gender of the goose?
      </h1>

<!--       <p>You can get help to figure out what type of goose it is with <a href="https://www.countryfile.com/wildlife/how-to-identify/guide-to-britains-geese-how-to-identify-and-where-to-see">guidance from BBC Countryfile.</a></P>
-->

<p>If you can tell the gender of the goose, this will help us monitor the gender mix of the goose population.</p>
  <p>A male goose is normally larger than a female goose, has a deeper honk and may be more agressive.</p>
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
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
<!--
<div class="govuk-form-group">
  <fieldset class="govuk-fieldset">
    <div class="govuk-radios" data-module="govuk-radios">
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="goose0types" name="goose0types" type="radio" value="White-fronted goose">
        <label class="govuk-label govuk-radios__label" for="goose0types">
          White-fronted goose
        </label>
      </div>
    <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="goose0types-2" name="goose0types" type="radio" value="Barnacle goose">
        <label class="govuk-label govuk-radios__label" for="goose0types-2">
          Barnacle goose
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="goose0types-3" name="goose0types" type="radio" value="Brent goose">
        <label class="govuk-label govuk-radios__label" for="goose0types-3">
          Brent goose
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="goose0types-4" name="goose0types" type="radio" value="Barnacle goose">
        <label class="govuk-label govuk-radios__label" for="goose0types-4">
          Barnacle goose
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="goose0types-5" name="goose0types" type="radio" value="Greylag goose">
        <label class="govuk-label govuk-radios__label" for="goose0types-5">
          Greylag goose
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="goose0types-6" name="goose0types" type="radio" value="Canada goose">
        <label class="govuk-label govuk-radios__label" for="goose0types-6">
          Canada goose
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="goose0types-7" name="goose0types" type="radio" value="Bean goose">
        <label class="govuk-label govuk-radios__label" for="goose0types-7">
          Bean goose
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="goose0types-8" name="goose0types" type="radio" value="Pink-footed goose">
        <label class="govuk-label govuk-radios__label" for="goose0types-8">
          Pink-footed goose
        </label>
      </div>
      <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="goose0types-9" name="goose0types" type="radio" value="Egyptian goose">
        <label class="govuk-label govuk-radios__label" for="goose0types-9">
          Egyptian goose
        </label>
      </div>
      <div class="govuk-radios__divider">or</div>
    <div class="govuk-radios__item">
        <input class="govuk-radios__input" id="goose0types-11" name="goose0types" type="radio" value="Not sure">
        <label class="govuk-label govuk-radios__label" for="goose0types-11">
          Not sure
        </label>
      </div>
    </div>
  </fieldset>
</div>
-->
<button type="submit" class="govuk-button" data-module="govuk-button">
Continue
</button>
      </form>'
    - description: This example can happen when showing information about a user that they need to check.
      link: /examples/complex-question/mistake-2
      height: 600px
      reason: This example puts links between the fieldset and the radio buttons, meaning screen reader users are unlikely to get the link announced. It also causes issues for showing error messages.
improvement:
- link: /examples/complex-question/improved
  height: 500px
  reason: Structuring the page to have header, details and question helps screen readers, audio announcers and general ease of memory. Links will also be announced by a screen reader before the question.
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
- link: improved-2
  height: 600px
  reason: This example reintroduced a clear fieldset header for the radio buttons, and also changes the existing fields to separate searching for an existing result with choosing one based on the previous information.
links:
    - text: Complex question pages on the GOV.UK Design system
      href: https://design-system.service.gov.uk/patterns/question-pages/#asking-complex-questions-without-using-hint-text

---
