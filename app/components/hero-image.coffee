`import Ember from 'ember';`
`import ScrollingMixin from '../mixins/scrolling';`

HeroImage = Ember.Component.extend ScrollingMixin,
  classNames: ['hero-image']

  scrolled: (e) ->
    top = $(document).scrollTop()

    @set('headerTop', top/3)
    @set('subHeaderTop', top/2)
    @set('titlePaddingTop', 200 + (top/5))

`export default HeroImage;`