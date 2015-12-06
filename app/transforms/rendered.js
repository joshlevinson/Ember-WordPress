import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function ( serialized ) {
    return ( 'object' === typeof serialized && 'undefined' !== typeof serialized.rendered ) ? serialized.rendered : serialized;
  },
  serialize: function ( deserialized ) {
    return deserialized;
  }
});
