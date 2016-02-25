`import Ember from 'ember';`
`import ScrollingMixin from '../mixins/scrolling';`
`import ResizeMixin from '../mixins/resize';`

HeroImage = Ember.Component.extend ScrollingMixin, ResizeMixin,
  classNames: ['hero-image']

  headerTop: 0
  subHeaderTop: 0
  titlePaddingTop: 150

  headerStyle: ( ->
    "background-image: url(#{@get('image')}); top: #{@get('headerTop')}px; height: #{@get('headerHeight')}px;".htmlSafe()
  ).property('image', 'headerTop', 'headerHeight').readOnly()

  headerTitleStyle : ( ->
    "padding-top: #{@get('titlePaddingTop')}px;".htmlSafe()
  ).property('titlePaddingTop').readOnly()

  subHeaderStyle: (->
    "top: #{@get('subHeaderTop')}px;".htmlSafe()
  ).property('subHeaderTop').readOnly()

  defaultHeaderHeight: ( ->
    if @get('large') then 600 else 300
  ).property('large').readOnly()

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
    @set('titlePaddingTop', 150 + (top/5))

  resized: ->
    @toggleProperty('_resized')

`export default HeroImage;`