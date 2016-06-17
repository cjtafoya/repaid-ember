import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveAttendee: function(){
      this.attrs.triggerSaveAttendee(this.getProperties(['name']))
    },
    cancelAdd: function(){
      this.triggerCancel()
    }
  }
});
