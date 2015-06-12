MessageBoard.Router.map(function() {
  // Route '/' to the questions.hbs page with the
  // questions.js route available to the questions.hbs:
  this.resource('questions', {path: '/'});
  // Route a specific post id to the 'post' page:
  // this.resource('question', {path: ':post_id'})
  this.resource('answers');
});
