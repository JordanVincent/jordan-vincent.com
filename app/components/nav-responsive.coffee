`import Ember from 'ember';`

NavResponsive = Ember.Component.extend
  classNames: ['nav-responsive']

  attributeBindings: ['style']

  style: (->
    display = 'block'
    "display: #{display};"
  ).property()

`export default NavResponsive;`