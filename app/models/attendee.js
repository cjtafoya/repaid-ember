import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  total_expenses: attr('number', {defaultValue: 0}),
  amount_due: attr('number', {defaultValue: 0}),
  balance: attr('number', {defaultValue: 0}),
  gathering: belongsTo('gathering'),
  expenses: hasMany('expense'),
  groups: hasMany('group')
});
