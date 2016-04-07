`import Ember from "ember";`

ApplicationRoute = Ember.Route.extend
  title: (tokens) ->
    title = 'Jordan Vincent | '
    if !Ember.isEmpty(tokens) then title + tokens.join(' - ')
    else title + 'UX Designer, Software Engineer, Entrepreneur'

`export default ApplicationRoute`