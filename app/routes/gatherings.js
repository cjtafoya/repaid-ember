import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('gathering')
  },
  actions: {
    save: function(gathering) {
      gathering.save().then(this.transitionTo('gatherings'));
    }
  }
});
