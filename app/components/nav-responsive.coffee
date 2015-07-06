`import Ember from 'ember';`
`import ScrollingMixin from '../mixins/scrolling';`

NavResponsive = Ember.Component.extend ScrollingMixin,
  classNames: ['nav-responsive']
  attributeBindings: ['style']

  height: ( -> 0
  ).property()

  style: (->
    show = @get('display') or $(window).width() <= 768
    top  = if show then 0 else (- @get('height'))

    "top: #{top}px;"
  ).property('display', 'height')

  _bindScrolling: (->
    @bindScrolling()
  ).on('didInsertElement')

  _calculateHeight: (->
    height = @$().outerHeight()
    @set('height', height)
  ).on('didInsertElement')

  _unbindScrolling: (->
    @unbindScrolling()
  ).on('willRemoveElement')

  scrolled: ->
    display = $(window).scrollTop() > 600
    @set('display', display)

`export default NavResponsive;`