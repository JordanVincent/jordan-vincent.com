`import Ember from 'ember';`

ProjectController = Ember.Controller.extend

  coverImage: (->
    @get('model.coverImage') || 'assets/images/projects-image.jpg'
  ).property('model.coverImage').readOnly()

  articleComponent: ( ->
    'project-articles/' + @get('model.slug')
  ).property('model.slug')

  titleColorStyle: ( ->
    'color: white;'.htmlSafe() if tinycolor(@get('model.color')).isDark()
  ).property('model.color').readOnly()

`export default ProjectController;`