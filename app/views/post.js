import Ember from 'ember';

export default Ember.View.extend({
  tagName: 'div',
  attributeBindings: ['contenteditable'],

  // Variables:
  editable: true,
  isUserTyping: false,
  plaintext: false,

  // Properties:
  contenteditable: (function() {
    var editable = this.get('editable');

    return editable ? 'true' : undefined;
  }).property('editable'),

  // Processors:
  processValue: function() {
    if (!this.get('isUserTyping') && this.get('value')) {
      return this.setContent();
    }
  },

  // Observers:
  valueObserver: (function() {
    Ember.run.once(this, 'processValue');
  }).observes('value', 'isUserTyping'),

  // Events:
  didInsertElement: function() {
    return this.setContent();
  },

  focusOut: function() {
    this.set('controller.model.content', this.$().html());
    this.get('controller.model').save();
    return this.set('isUserTyping', false);
  },

  keyDown: function(event) {
    if (!event.metaKey) {
      return this.set('isUserTyping', true);
    }
  },

  setContent: function() {
    //return this.$().html(Ember.Handlebars.Utils.escapeExpression(this.get('value')));
  }
});
