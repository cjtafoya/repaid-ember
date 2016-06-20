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
    saveExpense: function(properties) {
      this.get('expense').set('gathering', this.get('model'))
      this.get('expense').save();
      this.toggleProperty('addNewExpense');
    },
    saveAttendee: function(properties) {
      this.get('attendee').set('gathering', this.get('model'))
      this.get('attendee').save();
      this.toggleProperty('addNewAttendee')
    },
    saveGroup: function(properties) {
      this.get('group').set('gathering', this.get('model'))
      this.get('group').save();
      this.toggleProperty('addNewGroup');
    },
    addExpense: function(){
      this.toggleProperty('addNewExpense')
    },
    addAttendee: function(){
      this.toggleProperty('addNewAttendee')
    },
    addGroup: function(){
      this.toggleProperty('addNewGroup');
    }
  }
});
