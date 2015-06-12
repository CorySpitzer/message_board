// We called the action 'ask' in new-question.hbs
// so we need to define it:
MessageBoard.NewQuestionController = Ember.Controller.extend({
  actions: {
    ask: function() {
      var newQuestion = this.store.createRecord('question', {
        question: this.get('question'),
        author: this.get('author'),
        description: this.get('description')
      });
    }
  }
});
