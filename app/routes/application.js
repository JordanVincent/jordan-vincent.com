import Ember from "ember";

export default Ember.Route.extend({
  title(tokens) {
    let title = 'Jordan Vincent | ';

    if (!Ember.isEmpty(tokens)) {
      return title + tokens.join(' - ');
    } else {
      return title + 'UX Designer & Software Engineer';
    }
  }
});
