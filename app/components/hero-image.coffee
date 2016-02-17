`import Ember from 'ember';`
`import ScrollingMixin from '../mixins/scrolling';`
`import ResizeMixin from '../mixins/resize';`

HeroImage = Ember.Component.extend ScrollingMixin, ResizeMixin,
  classNames: ['hero-image']

  headerTop: 0
  subHeaderTop: 0
  titlePaddingTop: 200

  headerStyle: ( ->
    "background-image: url(#{@get('image')}); top: #{@get('headerTop')}px; height: #{@get('headerHeight')}px".htmlSafe()
  ).property('image', 'headerTop', 'headerHeight')

  defaultHeaderHeight: ( ->
    if @get('large') then 600 else 300
  ).property('large')

  headerHeightObs: ( ->
    windowH = $(window).height()
    defaultH = this.get('defaultHeaderHeight')
    headerH = if windowH > defaultH then defaultH else windowH
    @set('headerHeight', headerH)
  ).observes('_resized', 'defaultHeaderHeight').on('init')

  scrolled: ->
    top = $(document).scrollTop()

    @set('headerTop', top/3)
    @set('subHeaderTop', top/2)
    @set('titlePaddingTop', 200 + (top/5))

  resized: ->
    @set('_resized', !@get('_resized'))

`export default HeroImage;`