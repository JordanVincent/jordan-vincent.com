`import Ember from 'ember';`

ProjectController = Ember.Controller.extend

  coverImage: (->
    @get('model.coverImage') || 'assets/images/projects-image.jpg'
  ).property('model.coverImage').readOnly()

`export default ProjectController;`