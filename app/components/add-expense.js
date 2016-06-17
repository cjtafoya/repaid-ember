import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveExpense: function(){
      this.attrs.triggerSaveExpense();
      this.toggleProperty('addNewExpense');
    },
    updateGroup: function(newSelection, value, operation){
      this.set('expense.group', newSelection[0])
    },
    updateBuyer: function(newSelection, value, operation){
      this.set('expense.attendee', newSelection[0])
    }
  }
});
