`import Ember from 'ember';`
`import config from './config/environment';`
`import googlePageview from './mixins/google-pageview';`

Router = Ember.Router.extend googlePageview,
  location: config.locationType

Router.map ->
  @route 'about', {path: '/'}
  @route 'influences'
  @route 'contact'
  @resource 'projects', ->
    @resource 'project', {path: ':project_id'}, ->

`export default Router;`
