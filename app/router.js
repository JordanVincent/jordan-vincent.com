import Ember from 'ember';
import RouterScroll from 'ember-router-scroll';
import config from './config/environment';

const Router = Ember.Router.extend(RouterScroll, {
  location: config.locationType,
  rootURL: config.rootURL,

  metrics: Ember.inject.service(),

  didTransition() {
    this._super(...arguments);
    this._trackPage();
  },

  // Analytics
  _trackPage() {
    Ember.run.scheduleOnce('afterRender', this, () => {
      const page = this.get('url');
      const title = this.getWithDefault('currentRouteName', 'unknown');
      this.get('metrics').trackPage({ page, title });
    });
  }
});

Router.map(function() {
  this.route('project', { path: 'projects/:project_slug', resetNamespace: true });
  this.route('nps-nights', { path: 'night-under-the-stars' });
});

export default Router;
