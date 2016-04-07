`import Ember from "ember";`

ApplicationRoute = Ember.Route.extend

  model: (params) ->
    @store.findAll('project')

`export default ApplicationRoute`