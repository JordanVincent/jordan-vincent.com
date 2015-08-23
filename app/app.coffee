`import Ember from 'ember';`
`import Resolver from 'ember/resolver';`
`import loadInitializers from 'ember/load-initializers';`
`import config from './config/environment';`

Ember.MODEL_FACTORY_INJECTIONS = true

App = Ember.Application.extend
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver

loadInitializers(App, config.modulePrefix)

Ember.Route.reopen
  render: ->
    @_super.apply(@, arguments)
    window.scrollTo(0,0)

`export default App;`
