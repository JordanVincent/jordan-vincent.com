`import Ember from 'ember';`

ProjectLogo = Ember.Component.extend
  classNames: ['project-logo']

  style: (->
    color = @get('project.color') ? '#EEE'
    style = 'background-color:' + @get('project.color') + '; ' +
    'background-image: url("' + @get('project.logo') + '");'
    style.htmlSafe()
  ).property('project.color', 'project.logo').readOnly()

`export default ProjectLogo;`