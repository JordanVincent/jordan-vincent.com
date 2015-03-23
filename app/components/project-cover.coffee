`import Ember from 'ember';`

ProjectCover = Ember.Component.extend
  classNames: ['project-cover', 'left-column']
  attributeBindings: ['style']

  style: (->
    url = @get('project.coverImage') ? '../projects-image.jpg'
    "background-image: url(\"assets/images/projects/#{url}\");"
  ).property('project.coverImage')

`export default ProjectCover;`