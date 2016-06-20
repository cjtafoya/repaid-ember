import Ember from 'ember';

export default Ember.Component.extend({
  addNewGroup: false,
  actions: {
    saveGroup: function(){
      this.attrs.triggerSaveGroup();
      this.toggleProperty('addNewGroup');
    },
    updateSelection: function(newSelection, value, operation){
      this.set('group.attendees', newSelection);
    },
    cancelAdd: function(){
      this.triggerCancel()
    }
  }
});
