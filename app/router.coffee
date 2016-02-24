`import Ember from 'ember';`
`import config from './config/environment';`

Router = Ember.Router.extend
  location: config.locationType
  metrics: Ember.inject.service()

  didTransition: ->
    @_super(arguments...)
    @_trackPage()

  # Analytics
  _trackPage: ->
    Ember.run.scheduleOnce 'afterRender', @, =>
      page = document.location.pathname
      title = @getWithDefault('currentRouteName', 'unknown')
      @get('metrics').trackPage({page: page, title: title})

Router.map ->
  @route 'influences'
  @route 'contact'
  @route 'projects', ->
    @route 'project', { path: ':project_slug', resetNamespace: true }, ->
  @route 'not-found', { path: '/*path' }

`export default Router;`
