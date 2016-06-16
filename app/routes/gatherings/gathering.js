import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    delete: function(gathering){
      gathering.deleteRecord();
      gathering.save();
      this.transitionTo('gatherings');
    }
  }
});
