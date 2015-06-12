// We called the action 'delete' in question.hbs
// so we need to define it (We need an ObjectController,
// as opposed to just a Controller, so that we can display
// a question's properties on its handlebars page because
// ObjectControllers give their hbs files access to properties
// and Controllers don't):
MessageBoard.QuestionController = Ember.ObjectController.extend({
  isediting: false,
  actions: {
    edit: function() {
      this.set('isEditing', true)
    },
    save: function() {
      this.set('isEditing', false)
    },
    deleteQuestion: function() {
      if (confirm('Really?')) {
        this.get('model').destroyRecord();
        this.transitionToRoute('/', {async: true})
      }
    }
  }
});
