import Ember from 'ember';

export default Ember.Component.extend({
  isEdtingGroup: false,
  actions: {
    save(grp){
      this.toggleEditGroup()
      this.attrs.triggerEditGroup(grp);
    },
    updateSelection: function(newSelection, value, operation){
      this.set('grp.attendees', newSelection);
    }
  }
});
