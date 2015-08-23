`import Ember from "ember";`

ApplicationRoute = Ember.Route.extend
  model: (params) ->
    @store.find('project')

`export default ApplicationRoute`