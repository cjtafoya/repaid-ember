import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  amount: attr('number'),
  group_id: attr('number'),
  attendee_id: attr('number'),
  gathering: belongsTo('gathering'),
  group: belongsTo('group'),
  attendee: belongsTo('attendee')
});
