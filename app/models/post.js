import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('rendered'),
  status: DS.attr(),
  type: DS.attr(),
  content: DS.attr('rendered'),
  parent: DS.attr(),
  link: DS.attr(),
  date: DS.attr('date'),
  modified: DS.attr('date'),
  modified_gmt: DS.attr('date'),
  modified_tz: DS.attr(),
  format: DS.attr(),
  slug: DS.attr(),
  guid: DS.attr(),
  excerpt: DS.attr(),
  menu_order: DS.attr('number'),
  comment_status: DS.attr(),
  ping_status: DS.attr(),
  sticky: DS.attr('boolean'),
  date_tz: DS.attr(),
  date_gmt: DS.attr('date'),
  author: DS.attr(),
  featured_image: DS.attr(),
  _links: DS.attr('object'),
});
