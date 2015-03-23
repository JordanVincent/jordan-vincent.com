`import Ember from 'ember';`

ProjectsIndexController = Ember.ArrayController.extend
  mainProjects:  Ember.computed.filterBy('model', 'rank', 'main')
  classProjects: Ember.computed.filterBy('model', 'rank', 'class')
  sideProjects:  Ember.computed.filterBy('model', 'rank', 'side')


`export default ProjectsIndexController;`