`import Ember from 'ember';`
`import ScrollingMixin from '../mixins/scrolling';`
`import Snap from 'snap-svg';`
`import mina from 'mina';`

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

  _calculateHeight: (->
    height = @$().outerHeight()
    @set('height', height)
  ).on('didInsertElement')

  scrolled: ->
    display = $(window).scrollTop() > 600
    @set('display', display)

`export default NavResponsive;`