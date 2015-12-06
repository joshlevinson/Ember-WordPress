import config from '../config/environment';
import DS from 'ember-data';

var adapter = DS.RESTAdapter.extend({
  namespace: 'wp-json/wp/v2',
  addTrailingSlashes: true,
  host: config.wpURL,
  headers: {
    withCredentials: true,
    'Authorization': 'Basic ' + btoa( config.wpUser + ':' + config.wpPass ),
  },

});

export default adapter;
