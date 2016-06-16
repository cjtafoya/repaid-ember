import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete: function(gathering){
      gathering.destroyRecord();
      this.transitionTo('gatherings');
    }
  }
});
