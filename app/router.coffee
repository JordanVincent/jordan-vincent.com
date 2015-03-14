`import Ember from 'ember';`
`import config from './config/environment';`

Router = Ember.Router.extend
  location: config.locationType

Router.map ->
  @route 'about', {path: '/'}
  @route 'inspiration'
  @route 'contact'
  @resource 'projects', ->
    @resource 'project', {path: ':project_id'}, ->

`export default Router;`
