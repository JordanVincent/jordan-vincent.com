`import Ember from 'ember';`
`import ScrollingMixin from '../mixins/scrolling';`

NavResponsive = Ember.Component.extend ScrollingMixin,
  classNames: ['nav-responsive']
  attributeBindings: ['style']

  style: (->
    top = if @get('display') or $(window).width() <= 768 then '0px' else '-51px'
    "top: #{top};"
  ).property('display')

  didInsertElement: ->
    @bindScrolling('.content-column')

  willRemoveElement: ->
    @unbindScrolling()

  scrolled: (e) ->
    display = $('.content-column').scrollTop() > 60
    @set('display', display)

`export default NavResponsive;`