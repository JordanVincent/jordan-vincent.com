`import Ember from "ember";`

ProjectsIndexRoute = Ember.Route.extend
  model: (params) ->
    @store.find('project')

`export default ProjectsIndexRoute`