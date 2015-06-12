MessageBoard.Router.map(function() {
  // Route '/' to the questions.hbs page with the
  // questions.js route available to the questions.hbs:
  this.resource('questions', {path: '/'});
  this.resource('new-question');
  this.resource('question', {path: ':question_id'}, function() {
    this.resource('new-answer')
  });
});
