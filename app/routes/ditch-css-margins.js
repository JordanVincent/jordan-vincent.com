import Ember from "ember";

export default Ember.Route.extend({
  headData: Ember.inject.service(),

  afterModel() {
    this.set(
      "headData.description",
      "Defining a CSS margin on an element breaks the law of least knowledge …"
    );
  },

  title() {
    return "Ditch CSS margins | Jordan Vincent";
  }
});
