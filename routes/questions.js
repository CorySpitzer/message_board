// This route would automatically exist if we didn't extend it
MessageBoard.QuestionsRoute = Ember.Route.extend({
  // We create a model so that questions.hbs can access it:
  model: function() {
    // We take the extended Questions Route Ember Object and
    // find and return all the question(s) 
    return this.store.find('question')
  }
});
