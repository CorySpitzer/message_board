// What is going on here?!
MessageBoard.NewAnswerController = Ember.Controller.extend({
  actions: {
    save: function() {
      // What is 'model' here? Where does it come from?
      var answer = this.get('model');
      answer.save();

      // Why give 'this' a new name?
      var controller = this;
      answer.get('question').then(function(question) {
        question.save();
        controller.transitionToRoute('question', question);
      });
    }
  }
});
