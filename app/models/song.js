import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  genre: DS.attr('string'),
  key: DS.attr('string'),
  bpm: DS.attr('string'),
  description: DS.attr('string'),
  price: DS.attr('string'),

  libraries: DS.hasMany('library')

});
