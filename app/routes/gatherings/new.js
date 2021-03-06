import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params){
    return this.store.createRecord('gathering', params);
  },
  actions: {
    save: function(gathering) {
      gathering.save().then(this.transitionTo('gatherings'));
    }
  }
});
