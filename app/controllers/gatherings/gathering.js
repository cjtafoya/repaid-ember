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
  expenses: Ember.computed.alias('model.expenses'),
  amounts: Ember.computed.mapBy('expenses', 'amount'),
  totalDue: Ember.computed.sum('amounts'),
  totalDueNaNCheck: Ember.computed('totalDue', function(totalDue){
    if(this.get('totalDue') == 0){
      return "0"
    }else{
      return Math.round(this.get('totalDue'))
    }
  }),
  actions: {
    saveExpense: function(properties) {
      this.get('expense').set('gathering', this.get('model'))
      this.get('expense').save().then((expense) =>{
        this.get('model.expenses').pushObject(expense)
        this.toggleProperty('addNewExpense');
      })
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
    editGroup: function(grp) {
      grp.save();
    },
    editAttendee: function(att){
      att.save()
      this.toggleProperty('editCurrentAttendee')
    },
    addExpense: function(){
      this.toggleProperty('addNewExpense')
    },
    addAttendee: function(){
      this.toggleProperty('addNewAttendee')
    },
    addGroup: function(){
      this.toggleProperty('addNewGroup');
    },
    editAttendeeToggle: function(){
      this.toggleProperty('editCurrentAttendee')
    }
  }
});
