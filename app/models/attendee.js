import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  gathering: belongsTo('gathering'),
  expenses: hasMany('expense'),
  groups: hasMany('group')
});
