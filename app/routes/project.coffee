`import Ember from "ember";`

ProjectRoute = Ember.Route.extend
  titleToken: (model) ->
    model.get('name')

  serialize: (model) ->
    project_id: model.get('id')
    project_name: model.get('name')

  model: (params) ->
    @store.find('project', params.project_id)

`export default ProjectRoute`