`import Ember from 'ember';`

ProjectsList = Ember.Component.extend
  classNames: ['projects-list']

  mainProjects:  Ember.computed.filterBy('projects', 'rank', 'main')
  classProjects: Ember.computed.filterBy('projects', 'rank', 'class')
  sideProjects:  Ember.computed.filterBy('projects', 'rank', 'side')

`export default ProjectsList;`