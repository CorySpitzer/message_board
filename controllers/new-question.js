// We called the action 'ask' in new-question.hbs
// so we need to define it:
MessageBoard.NewQuestionController = Ember.Controller.extend({
  actions: {
    ask: function() {
      // Create a DS store record
      var newQuestion = this.store.createRecord('question', {
        question: this.get('question'),
        author: this.get('author'),
        description: this.get('description')
      });
      // Save the record so that it stays in local memory
      newQuestion.save();
      // Leave the page we just submitted the form from
      this.transitionToRoute('questions');
    }
  }
});
