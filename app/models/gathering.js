import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  tagline: attr('string'),
  user: belongsTo('user'),
  attendees: hasMany('attendee'),
  groups: hasMany('group'),
  expenses: hasMany('expense')
});
