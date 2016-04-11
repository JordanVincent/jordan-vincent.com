`import Ember from "ember";`

ApplicationRoute = Ember.Route.extend
  caseStudyRedirect: Ember.inject.service()

  redirect: (model, transition) ->
    unless transition.targetName is 'index'
      @set('caseStudyRedirect.wasRedirected', true)

  title: (tokens) ->
    title = 'Jordan Vincent | '
    if !Ember.isEmpty(tokens) then title + tokens.join(' - ')
    else title + 'UX Designer, Software Engineer, Entrepreneur'

`export default ApplicationRoute`