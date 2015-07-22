import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('users');
  this.route('artists', function() {
    this.route('show', {path: ':artist_id'});
  });
  this.route('songs', function() {
    this.route('show', {path: ':song_id'});
  });
});

export default Router;
