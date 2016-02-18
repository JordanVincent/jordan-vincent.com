`import Ember from 'ember';`

ProjectsList = Ember.Component.extend
  classNames: ['projects-list']

  projectsSorting: ['position:desc']
  sortedProjects: Ember.computed.sort('projects', 'projectsSorting')

  mainProjects:  Ember.computed.filterBy('sortedProjects', 'category', 'main')
  classProjects: Ember.computed.filterBy('sortedProjects', 'category', 'class')
  sideProjects:  Ember.computed.filterBy('sortedProjects', 'category', 'side')

`export default ProjectsList;`