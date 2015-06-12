MessageBoard.Router.map(function() {
  // Route '/' to the questions.hbs page with the
  // questions.js route available to the questions.hbs:
  this.resource('questions', {path: '/'});
  this.resource('question', {path: ':question_id'})
  this.resource('new-question');
  // Route a specific post id to the 'post' page:
  // this.resource('question', {path: ':post_id'})
  this.resource('answers');
});
