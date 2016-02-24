`import Ember from "ember";`

ProjectRoute = Ember.Route.extend
  titleToken: (model) ->
    model.get('name')

  serialize: (model) ->
    project_slug: model.get('slug')

  model: (params) ->
    @store.queryRecord 'project', { slug: params.project_slug }

  actions:
    error: (error) ->
      Ember.Logger.error(error)
      @transitionTo('not-found')

`export default ProjectRoute`