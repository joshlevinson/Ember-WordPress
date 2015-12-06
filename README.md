# Ember WordPress

This is a proof of concept app, using Ember 1.x to list and provide a barebones editor for posts communicated over the WordPress REST API.
Eventually, I hope to get around to updating it to Ember 2.x!

## Prerequisites

You will need the following things properly installed on your computer to set this up locally.

### For Ember:
* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

### For WordPress
* Set up a WP site (I'm using 4.4 RC, you probably should use that as a minimum)
* Install/configure the [REST API (v2)](https://wordpress.org/plugins/rest-api).
* Install the following plugins:
  * [Basic Auth](https://github.com/WP-API/Basic-Auth)
* Put `ember.php` (from this repo) in `/wp-content/mu-plugins/`. It adds necessary (development-only!) headers required to communicate between Ember + WP.

## Installation

### For Ember
* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`
* Add your specific site details in config/environment.js. Primarily:
  * Site URL
  * User credentials

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

