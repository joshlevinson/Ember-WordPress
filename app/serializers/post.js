import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {

  primaryKey: 'id',

  attrs: {
    author: {
      embedded: 'always'
    },
    tags: {
      embedded: 'always'
    },
    categories: {
      embedded: 'always'
    }
  },
  serialize: function(snapshot, options) {
    var json = this._super(snapshot, options);
    json['content_raw'] = json.content;
    return json;
  },

  serializeIntoHash: function(hash, type, record, options) {
    Ember.merge(hash, this.serialize(record, options));
  },

  extractSingle: function(store, type, payload, id, requestType) {
    return this._super(store, type, { post: payload }, id, requestType);
  },

  extractArray: function(store, type, payload) {

    var data = {},
      root = Ember.String.pluralize(type.typeKey);

    data[root] = payload;

    return this._super(store, type, data);
  },

});
