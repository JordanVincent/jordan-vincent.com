`import Ember from 'ember';`

ProjectItem = Ember.Component.extend
  classNames: ['project-item']
  classNameBindings: ['isDark']

  paths: [
    from: 'M 0 200 l 100 -50 l 50 50 l 150 -75 l 50 50 l 50 -25 V 400 H 0 Z'
    to: 'M 0 400 L 100 400 L 150 400 L 300 400 L 350 400 L 400 400 V 400 H 0 Z'
  ,
    from: 'M 0 200 v -50 l 50 -25 l 100 75 l 50 -25 l 100 25 l 100 -50 V 400 H 0 Z'
    to: 'M 0 400 V 400 L 50 400 L 150 400 L 200 400 L 300 400 L 400 400 V 400 H 0 Z'
  ,
    from: 'M 0 200 v -50 l 50 -50 l 75 75 l 125 -25 l 100 25 l 50 -25 V 400 H 0 Z'
    to: 'M 0 400 V 400 L 50 400 L 125 400 L 250 400 L 350 400 L 400 400 V 400 H 0 Z'
  ]

  isDark: ( ->
    tinycolor(@get('project.color')).isDark()
  ).property('project.color').readOnly()

  path: (->
    index = @get('index') % @get('paths.length')
    @get('paths').objectAt(index)
  ).property('index', 'paths.[]').readOnly()

  bindHover: (->
    @$().on 'mouseenter.project-item', =>
      @animate @get('path').to

    @$().on 'mouseleave.project-item', =>
      @animate @get('path').from
  ).on('didInsertElement')

  unbindHover: (->
    @$().off('mouseenter.project-item')
    @$().off('mouseleave.project-item')
  ).on('willRemoveElement')

  animate: (path) ->
    snapElement = Snap(@$('svg')[0]).select('path')
    snapElement.animate({path: path}, 250, mina.easeinout)

`export default ProjectItem;`