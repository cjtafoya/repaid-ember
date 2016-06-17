import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    cancelAdd: function(){
      this.triggerCancel()
    },
    addAttendee: function(){
      this.toggleProperty('addNewAttendee');
    },
    saveAttendee: function(){
      this.attrs.triggerSaveAttendee()
    },
    updateSelection: function(newSelection, value, operation){
      this.set('attendee.groups', newSelection);
    }
  }
});
