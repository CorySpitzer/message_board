// We called the action 'delete' in question.hbs
// so we need to define it (not sure why it is an
// Object controller instead of a regular one):
MessageBoard.QuestionController = Ember.Controller.extend({
  actions: {
    delete: function() {
      if (confirm('Really?')) {
        this.get('model').destroyRecord();
      }
    this.transitionToRoute('/', {async: true})
    }
  }
});
