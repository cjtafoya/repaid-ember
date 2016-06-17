import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveExpense: function(){
      this.attrs.triggerSaveExpense(this.getProperties(['expense.name', 'expense.amount', 'expense.attendee_id', 'expense.group_id']))
      this.toggleProperty('addNewExpense')
      debugger
    }
  }
});
