`import Ember from 'ember';`
`import config from './config/environment';`
`import googlePageview from './mixins/google-pageview';`

Router = Ember.Router.extend googlePageview,
  location: config.locationType

Router.map ->
  @route 'about', {path: '/'}
  @route 'influences'
  @route 'contact'
  @route 'projects', ->
    @route 'project', { path: ':project_id/:project_name', resetNamespace: true }, ->

`export default Router;`
