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
  @route 'case-study'
  @route 'inner', { path: '/' }, ->
    @route 'index', { path: '', resetNamespace: true }
    @route 'influences', { resetNamespace: true }
    @route 'contact', { resetNamespace: true }
    @route 'projects', { resetNamespace: true }, ->
      @route 'project', { path: ':project_slug', resetNamespace: true }
    @route 'not-found', { path: '*path', resetNamespace: true }

`export default Router;`
