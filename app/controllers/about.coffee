`import Ember from 'ember';`

AboutController = Ember.ArrayController.extend
  birthDate: (-> new Date(1991, 6, 15)).property()
  todayDate: (-> Date.now()).property()

  age: (->
    difference = @get('todayDate') - @get('birthDate')
    (new Date(difference)).getUTCFullYear() - 1970
  ).property('birthDate', 'todayDate')

`export default AboutController;`