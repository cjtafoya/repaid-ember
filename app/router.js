import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('gatherings', function() {
    this.route('gathering', { path: '/:gathering_id' });
    this.route('new');
  });
});

export default Router;
