import Ember from 'ember';

export default Ember.Component.extend({
  addNewAttendee: false,
  actions: {
    addAttendee: function(){
      this.toggleProperty('addNewAttendee')
    },
    saveAttendee: function(){
      this.attrs.triggerSaveAttendee(this.getProperties(['name']))
      this.toggleProperty('addNewAttendee')
    }
  }
});
