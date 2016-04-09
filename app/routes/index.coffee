`import Ember from "ember";`
`import ResizeMixin from '../mixins/resize';`

IndexRoute = Ember.Route.extend ResizeMixin,
  caseStudyRedirect: Ember.inject.service()

  redirect: ->
    @bindResize()

    return if @get('caseStudyRedirect.wasRedirected') || @get('isMobile')

    @set('caseStudyRedirect.wasRedirected', true)
    @transitionTo('case-study')

`export default IndexRoute`