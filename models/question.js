// Create a question model so that the question.js route
// has access to it
MessageBoard.Question = DS.Model.extend({
  title: DS.attr(),
  body: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
