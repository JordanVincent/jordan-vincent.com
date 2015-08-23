`import Ember from 'ember';`

AboutController = Ember.Controller.extend
  birthDate: (-> new Date(1991, 6, 15)).property().readOnly()
  todayDate: (-> Date.now()).property().readOnly()

  age: (->
    difference = @get('todayDate') - @get('birthDate')
    (new Date(difference)).getUTCFullYear() - 1970
  ).property('birthDate', 'todayDate').readOnly()

`export default AboutController;`