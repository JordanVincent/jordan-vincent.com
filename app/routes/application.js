import Ember from 'ember';
import DefaultMetaMixin from '../mixins/default-meta';

export default Ember.Route.extend(DefaultMetaMixin, {
  title(tokens) {
    let title = 'Jordan Vincent | ';

    if (!Ember.isEmpty(tokens)) {
      return title + tokens.join(' - ');
    } else {
      return title + 'UX Designer & Software Engineer';
    }
  }
});
