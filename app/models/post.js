import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  date: DS.attr(),
  image: DS.attr(),
  body: DS.attr()
});
