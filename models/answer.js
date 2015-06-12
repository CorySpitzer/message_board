MessageBoard.Answer = DS.Model.extend({
  response: DS.attr(),
  author: DS.attr(),
  question: DS.belongsTo('question', {async: true})
});
