import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('user')
  },
  actions: {
    signup(model) {
      model.save().then(this.transitionTo('login'));
    }
  }
});
