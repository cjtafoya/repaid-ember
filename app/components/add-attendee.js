import Ember from 'ember';

export default Ember.Component.extend({
  addNewAttendee: false,
  actions: {
    add: function(){
      this.toggleProperty('addNewAttendee')
    },
    save: function(){
      debugger
      //send attendee model out to controller or something
    }
  }
});
