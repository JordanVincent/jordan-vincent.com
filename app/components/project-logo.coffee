`import Ember from 'ember';`

ProjectLogo = Ember.Component.extend
  classNames: ['project-logo']

  style: (->
    color = @get('project.color') ? '#EEE'
    'background-color:' + @get('project.color') + '; ' +
    'background-image: url("' + @get('project.logo') + '");'
  ).property('project.color', 'project.logo')

`export default ProjectLogo;`