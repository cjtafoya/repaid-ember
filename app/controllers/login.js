import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate: function() {
      var creds = {identification: this.get('model.email'), password: this.get('model.password')}
      var credentials = this.getProperties('identification', 'password'),
      authenticator = 'authenticator:jwt';
      this.get('session').authenticate(authenticator,
        credentials).catch((reason)=>{
        this.set('errorMessage', reason.error || reason);
      });
    }
  }
});
