import Ember from 'ember';

export default Ember.Component.extend({
  addNewGroup: false,
  actions: {
    addGroup: function(){
      this.toggleProperty('addNewGroup');
    },
    saveGroup: function(){
      this.attrs.triggerSaveGroup();
      this.toggleProperty('addNewGroup');
    },
    updateSelection: function(newSelection, value, operation){
      this.set('group.attendees', newSelection);
    }
  }
});
