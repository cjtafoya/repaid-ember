import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveExpense: function(){
      this.attrs.triggerSaveExpense();
    },
    selectAttendee: function(value, component){
      this.set('expense.attendee', value)
    },
    selectGroup: function(value, component){
      this.set('expense.group', value)
    }
  }
});
