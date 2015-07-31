# README
## Ground_Under

## This is an evolving project.
The purpose of this app is mostly a learning experience combining Ember-CLI and Ruby on Rails. The app is designed to emulate a music shopping and library website.
This app is not yet hosted on Heroku


#### Requirements:
* Ember-cli - follow setup instructions at [Ember.com] [link2]
* Ruby > 2.0
* Rails Gem > 4.0
* Bundler Gem
* Postgresql Database
[link2]: http://www.ember-cli.com/user-guide/

#### Configuration:
To create this app on your own system follow the prompts below
* Start Postgres
* Run Terminal Commands
    * Back End
    * `$ git clone https://github.com/finalfreq/ground_under_backend.git`
    * `$ cd ground_under_backend`
    * `$ bundler install`
    * `$ rake db:create`
    * `$ rake db:migrate`
    * `$ rails s`

* In a different terminal tab/window:
    * Front end
    * `$ git clone https://github.com/finalfreq/ground_under.git`
    * `$ cd ground_under`
    * `$ ember s --proxy http://localhost:3000`

* Open a browser window and navigate to localhost:4200


#### Testing:
This app uses rspec for unit testing on the back end.
To see the results of these tests follow the Configuration Instructions :back_end above except for running the rails server.  Then run terminal command:  `$ rspec`


#### Copyright and License
Copyright &copy; 2015 - Jordan Carlson, Alexandar Castaneda, James Williams, Steve Bussert

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software. The name of the original author (Steve Bussert) may not be used to endorse or promote products derived from this software without specific prior written permission.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
