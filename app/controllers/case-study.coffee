`import Ember from 'ember';`

CaseStudyController = Ember.Controller.extend

  slides: [
    title: '01 - Enter Bill Price'
    description: '<p>This is the first screen when opening the app. It asks to enter the price of the bill. The keyboard is already open. It navigates to the next screen on submit.</p>'
    image: 'assets/images/case-study/unnamed-55.png'
  ,
    title: '02 - Choose Tip'
    description: '<p>Five tip options are presented. Percentages allow to quickly select a tip. "Custom" allows to set the dollar amount or percentage precisely (see below). "Assistant" gives the user the best tip based on the situation! (see next)</p><p>The app is only one screen. Active elements are easily accessible in the center, older ones like "Bill total" are reduced. The user can scroll up and tap on a previous element to change it.</p>'
    image: 'assets/images/case-study/unnamed-56.png'
  ,
    title: '03 - Choose Tip (assistant)'
    description: '<p>The assistant is a three step process which walks though the user. By asking multiple question, it is able to guess the tip that best suits the situation. From the research, the tip depended mostly on setting and service. Next to each option, an estimate helps the user make decisions and learn over time. Note: icons used are placeholders.</p>'
    image: 'assets/images/case-study/unnamed-63.gif'
  ,
    title: '04 - Round Total'
    description: '<p>From the competitive analysis, I noted that a lot of apps allowed to round the total. It is actually very useful when paying with cash.</p>'
    image: 'assets/images/case-study/unnamed-57.png'
  ,
    title: '05 - Summary'
    description: '<p>After only three simple steps, the user is shown the grand total and the tip. The format (tip first and then grand total) follows the order on the check.</p><p>If not satisfied, the user can scroll up and tap on any previous step to change its choices.</p><p>One reason tipping can be uncomfortable is that a lot of people depend on it to live. After the summary, an interesting fact tries to bring back the focus on the receiver of the tip. It makes the act of tipping more humane.</p><p>From there, the user has the choice to leave or split the bill between multiple participants (second goal). But instead of switching contexts, the user stays on the same page (see next).</p>'
    image: 'assets/images/case-study/unnamed-58.png'
  ,
    title: '06 - Number of Participants'
    description: '<p>To split the bill, the user first needs to enter the number of paying participants. For more than five participants, the user can press "+" and a popup shows up.</p><p>Limiting to five participants reduces the number of options and in 90% of the cases groups are less than six people. Six is also a "magic" number in the service industry as the tip is generally automatically included in the bill. Thus, this app becomes less relevant.</p>'
    image: 'assets/images/case-study/unnamed-59.png'
  ,
    title: '07 - Splitting Strategy'
    description: '<p>Because the app is supposed to be used in timely situations, I focussed on offering a quick way to get the job done. The split option is a great example. "Evenly" just does what it says. "Custom" allows the user to enter for each participant custom amounts (see next).</p><p>The custom option is very time consuming. It is not always worth it. To make the choice easier, below "Evenly" is indicated the amount per person in case the bill is split equally.</p>'
    image: 'assets/images/case-study/unnamed-60.png'
  ,
    title: '08 - Splitting Strategy (custom)'
    description: '<p>For each participant, the user will be asked to enter what they consumed. Generally the tap lists individual items rather than sub totals for each person. Those screens allow to enter each of those.</p><p>Participants are differentiated by color (later icons or emoji’s). It’s such an ephemeral use case, I didn’t want to force the user to enter names. It would defy its purpose.</p>'
    image: 'assets/images/case-study/unnamed-68.gif'
  ,
    title: '09 - Share Summary'
    description: '<p>This screen is the last one in the flow. It lists all participants and the amount they owe. If the bill is split evenly, only one is shown. The color for each participant is the same than used on the previous screen.</p><p>The main concern for the user is to make sure everyone pays him/her back. The share functionality can be useful to request money using payment apps, or send a SMS or email (see above).</p><p>The button "done" redirects to the list of previous calculations.</p>'
    image: 'assets/images/case-study/unnamed-61.png'
  ,
    title: '10 - History'
    description: '<p>The history lists the previous tip calculations. The user can tap on an item to inspect it (he is brought back to the summary screen). It is quite useful to quickly track expenses.</p><p>The "+" button starts a new tip calculation. Preferences are accessible through the hamburger menu.</p><p>Preferences include currencies, defaults, language, and more.</p>'
    image: 'assets/images/case-study/unnamed-67.png'
  ]

  slideIndex: 0

  activeSlide: Ember.computed 'slideIndex', ->
    @get('slides').objectAt @get('slideIndex')

  showNext: Ember.computed 'slideIndex', 'slides.length', ->
    @get('slideIndex') < @get('slides.length') - 1

  showPrevious: Ember.computed 'slideIndex', ->
    @get('slideIndex') > 0

  actions:
    next: ->
      @incrementProperty('slideIndex')
      max = @get('slides.length') - 1
      @set('slideIndex', max) if @get('slideIndex') > max

    previous: ->
      @decrementProperty('slideIndex')
      @set('slideIndex', 0) if @get('slideIndex') < 0

`export default CaseStudyController;`