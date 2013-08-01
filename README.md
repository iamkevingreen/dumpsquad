Cardspark
================

Web App for Cardspark

## Build Instructions
This project uses [Bower](http://bower.io) to manage dependencies, and [Grunt](http://gruntjs.com) to automate build tasks. Source files are located in the "src" directory. Compiled, distribution-ready files are in "dist".
- Install [Node.js](http://nodejs.org)
- Install grunt-cli and bower globally: `npm install -g grunt-cli bower`
- Navigate to the project root directory
- Install local copy of project dependencies: `bower install`
- Install local copy of dev dependencies: `npm install`
- Run `grunt` to compile, or `grunt server` to start a live development environment.


Important Notes
================

## Leaflet.js
Leaflet that is stored in bower is not the right instace that we need, so when you do a bower install you will not have the right leaflet and you will not have a functioning dashboard. You will need to grab leaflet.js from the leaflet server the git repository has a bunch of extra stuff you don't need.
