`import Ember from 'ember';`

ProjectItem = Ember.Component.extend
  classNames: ['project-item']

  style: (->
    color = @get('project.color') ? '#EEE'
    'background-color:' + @get('project.color') + '; ' +
    'background-image: url("assets/images/' + @get('project.logo') + '");'
  ).property('project.color', 'project.logo')

`export default ProjectItem;`