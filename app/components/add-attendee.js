import Ember from 'ember';

export default Ember.Component.extend({
  addNewAttendee: false,
  actions: {
    addAttendee: function(){
      this.toggleProperty('addNewAttendee')
    },
    saveAttendee: function(){
      this.attrs.triggerSaveAttendee(this.get('cbGroups'))
      this.toggleProperty('addNewAttendee')
    },
    updateSelection: function(newSelection, value, operation){
      this.set('attendee.groups', newSelection)
    }
  }
});
