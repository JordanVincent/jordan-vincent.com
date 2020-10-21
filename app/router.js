import Ember from "ember";
import RouterScroll from "ember-router-scroll";
import config from "./config/environment";

const Router = Ember.Router.extend(RouterScroll, {
  location: config.locationType,
  rootURL: config.rootURL,

  metrics: Ember.inject.service(),
  headData: Ember.inject.service(),

  setTitle(title) {
    this.get("headData").set("title", title);
  },

  didTransition() {
    this._super(...arguments);
    const url = "http://jordan-vincent.com" + this.get("currentURL");
    this.get("headData").set("url", url);
    this._trackPage();
  },

  // Analytics
  _trackPage() {
    Ember.run.scheduleOnce("afterRender", this, () => {
      const page = this.get("url");
      const title = this.getWithDefault("currentRouteName", "unknown");
      this.get("metrics").trackPage({ page, title });
    });
  }
});

Router.map(function() {
  this.route("project", {
    path: "projects/:project_slug",
    resetNamespace: true
  });
  this.route("nps-nights", { path: "night-under-the-stars" });
  this.route("us-flights", { path: "flight-against-time" });
  this.route("ditch-css-margins", { path: "blog/ditch-css-margins" });
});

export default Router;
