import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    /**
     * Receives a Stripe token after checkout succeeds
     * The token looks like this https://stripe.com/docs/api#tokens
     */
    processStripeToken: function(token) {
      charge = this.store.createRecord('charge', {
        amount: this.get('amount') * 100,
        token: token
      });
      debugger
      var _this = this
      charge.save().then(function(){
        _this.transitionTo('songs.index')
      });
    }
  }
});
