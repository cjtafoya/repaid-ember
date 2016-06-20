import Ember from 'ember';

export default Ember.Component.extend({
  isEdting: false,
  actions: {
    save(att){
      this.attrs.triggerEditAttendee(att);
    }
  }
});
