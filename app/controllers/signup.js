import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  model() {
    return this.store.createRecord('user')
  },
  actions: {
    signup(model) {
      model.save().then((user)=>{
        var credentials = this.getProperties('model.email', 'model.password');
        var creds = {identification: this.get('model.email'), password: this.get('model.password')}
        var authenticator = 'authenticator:jwt';
        this.get('session').authenticate(authenticator,
          creds).catch((reason)=>{
          this.set('errorMessage', reason.error || reason);
        });
      })
    }
  }

});
