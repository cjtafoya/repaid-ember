import Ember from 'ember';

export default Ember.Controller.extend({
  attendee: Ember.computed('attendee.id',function(){
    return this.store.createRecord('attendee');
  }),
  group: Ember.computed('group.id',function(){
    return this.store.createRecord('group');
  }),
  expense: Ember.computed('expense.id',function(){
    return this.store.createRecord('expense');
  }),
  actions: {
    saveAttendee: function(properties) {
      this.get('attendee').set('gathering', this.get('model'))
      this.get('attendee').save();
    },
    saveGroup: function(properties) {
      this.get('group').set('gathering', this.get('model'))
      this.get('group').save();
    },
    saveExpense: function(properties) {
      this.get('expense').set('gathering', this.get('model'))
      this.get('expense').save();
    },
  }
});
