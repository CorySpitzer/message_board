// Create a question model so that the question.js route
// has access to it
MessageBoard.Question = DS.Model.extend({
  question: DS.attr(),
  author: DS.attr(),
  description: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
