import Ember from 'ember';

export default Ember.Component.extend({
  isEditingGroup: false,
  actions: {
    edit() {
      this.toggleProperty('isEditingGroup')
    }
  }
});
