// We called the action 'delete' in question.hbs
// so we need to define it (We need an ObjectController,
// as opposed to just a Controller, so that we can display
// a question's properties on its handlebars page):
MessageBoard.QuestionController = Ember.ObjectController.extend({
  actions: {
    delete: function() {
      if (confirm('Really?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('/', {async: true})
      }
    }
  }
});
