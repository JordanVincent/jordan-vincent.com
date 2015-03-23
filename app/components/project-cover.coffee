`import Ember from 'ember';`

ProjectCover = Ember.Component.extend
  classNames: ['project-cover', 'left-column']
  attributeBindings: ['style']

  style: (->
    url = @get('project.coverImage') ? 'assets/images/projects-image.jpg'
    "background-image: url(\"#{url}\");"
  ).property('project.coverImage')

`export default ProjectCover;`