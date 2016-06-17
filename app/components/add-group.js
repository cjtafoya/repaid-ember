import Ember from 'ember';

export default Ember.Component.extend({
  addNewGroup: false,
  actions: {
    addGroup: function(){
      this.toggleProperty('addNewGroup')
    },
    saveGroup: function(){
      debugger
      this.attrs.triggerSaveGroup(this.getProperties(['name']))
      this.toggleProperty('addNewGroup')
    }
  }
});
