`import Ember from 'ember';`
`import ScrollingMixin from '../mixins/scrolling';`
`import ResizeMixin from '../mixins/resize';`
`import Snap from 'snap-svg';`
`import mina from 'mina';`

NavResponsive = Ember.Component.extend ScrollingMixin, ResizeMixin,
  classNames: ['nav-responsive']
  classNameBindings: ['afterOpen', 'beforeOpen']
  attributeBindings: ['style']

  isMobile: false
  MAX_PHONE_WIDTH: 768

  height: 0

  afterOpen: false
  beforeOpen: false

  pathClosed: 'M0,0C0,0,0,0,0,0C0,0,25,0,25,0C25,0,75,0,75,0C75,0,100,0,100,0C100,0,125,0,125,0C125,0,200,0,200,0C200,0,225,0,225,0C225,0,237.5,0,237.5,0C237.5,0,300,0,300,0C300,0,350,0,350,0C350,0,400,0,400,0C400,0,400,0,400,0C400,0,0,0,0,0C0,0,0,0,0,0'
  pathOpen: 'M0,0C0,0,0,50,0,50C0,50,25,25,25,25C25,25,75,75,75,75C75,75,100,62.5,100,62.5C100,62.5,125,75,125,75C125,75,200,0,200,0C200,0,225,25,225,25C225,25,237.5,12.5,237.5,12.5C237.5,12.5,300,75,300,75C300,75,350,25,350,25C350,25,400,50,400,50C400,50,400,0,400,0C400,0,0,0,0,0C0,0,0,0,0,0'

  style: (->
    show = @get('display') or $(window).width() <= 768
    top  = if show then 0 else (- @get('height'))
    "top: #{top}px;".htmlSafe()
  ).property('display', 'height').readOnly()

  _calculateHeight: (->
    height = @$().outerHeight()
    @set('height', height)
  ).observes('isMobile').on('didInsertElement')

  _initDefaults: (->
    @_resetDisplay()
    @_updateIsMobile()
    @_initSVG()
  ).on('didInsertElement')

  scrolled: ->
    @_resetDisplay()

  resized: ->
    @_resetDisplay()
    @_updateIsMobile()

  _resetDisplay: ->
    windowH = $(window).height()
    threshold = if windowH > 600 then 600 else windowH
    display = $(window).scrollTop() > threshold

    @set('display', display)

  _updateIsMobile: ->
    windowW = $(window).width()
    isMobile = windowW < this.MAX_PHONE_WIDTH

    @set('isMobile', isMobile)

  _initSVG: ->
    snap = Snap(@$('svg')[0])
    path = snap.select('path')

    path.attr({ d: @get('pathClosed')})
    @set('svgPath', path)
  
  openMenu: ->
    @set('beforeOpen', true)
    @_animatePath(@get('pathOpen')).then =>
      @set('afterOpen', true)

  closeMenu: ->
    @set('beforeOpen', false)
    @_animatePath(@get('pathClosed')).then =>
      @set('afterOpen', false)

  # Returns a promise
  _animatePath: (d) ->
    new Ember.RSVP.Promise( (resolve) =>
      @get('svgPath').animate {path: d}, 500, mina.easeinout, ->
        resolve()
    )

  click: ->
    if @get('afterOpen')
      @closeMenu()
    else
      @openMenu()

`export default NavResponsive;`