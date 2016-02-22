`import Ember from 'ember';`

RaggedEdge = Ember.Component.extend
  tagName: 'svg'
  classNames: ['ragged-edge']
  attributeBindings: ['viewBox', 'preserveAspectRatio']

  viewBox: '0 0 1200 50'
  preserveAspectRatio: 'none'

`export default RaggedEdge;`