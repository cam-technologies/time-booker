[![Build Status](https://secure.travis-ci.org/martinmicunda/tweet-map.png)](http://travis-ci.org/martinmicunda/tweet-map) [![Dependency Status](https://david-dm.org/cam-technologies/time-booker.png)](https://david-dm.org/cam-technologies/time-bookerp) [![devDependency Status](https://david-dm.org/cam-technologies/time-booker/dev-status.png)](https://david-dm.org/cam-technologies/time-booker#info=devDependencies) 
Time-Booker
===========

Web based time booking application, build using the **MEEN** stack. This application will allow users to manually enter work times in blocks of hours and minutes for each day of the week.

## Technologies Used

* **Client Side:**
    * [EmberJS](http://emberjs.com/)
    * [HTML5](http://www.w3.org/TR/2011/WD-html5-20110525/)
    * [CSS3](http://www.w3.org/TR/2001/WD-css3-roadmap-20010523/)
    * [Bootstrap 3](http://getbootstrap.com/)

* **Server Side:**
    * [NodeJS](http://nodejs.org/)
    * [ExpressJS](http://expressjs.com/)
    * [Stylus](http://learnboost.github.io/stylus/)
    * [Socket.IO](http://socket.io/)

* **Development & Deployment:**
    * [Gulp](http://gulpjs.com/)
    * [Bower](http://bower.io/)
    * [Travis CI](https://travis-ci.org/)

* **Test:**
    * [Jasmine](http://pivotal.github.io/jasmine/)
    * [Karma](http://karma-runner.github.io/)
    * [Protractor](http://github.com/angular/protractor/)
    * [Selenium](http://www.seleniumhq.org/)

## Directory Layout

**Development:**

    time-booker/ 
      |- client/                --> all client code
      |  |- src/                    --> client source code files
      |  |  |- app/                     --> ember.js app code
      |  |  |- assets/                  --> static files like fonts, images, fonts
      |  |  |  |- fonts/                    --> fonts
      |  |  |  |- images/                   --> image files
      |  |  |  |- styles/                   --> css & sass files 
      |  |  |- vendor/                  --> 3rd party client and test libraries
      |  |  |- index.html               --> app main file
      |  |  |- favicon.ico              --> favicon icon
      |  |- test/                   --> client test code
      |  |  |- config/                  --> configuration files for unit (karma) and e2e (protactor) tests
      |  |  |- e2e/                     --> e2e test files
      |  |  |- unit/                    --> unit test files
      |- server/                --> all server code   
      |  |- src/                    --> server source code files
      |  |- test/                   --> server test code
      |     |- config/                  --> configuration files for unit (karma) test
      |     |- unit/                    --> unit test files
      |- .bowerrc               --> specify where bower dependencies should be installed
      |- .editorconfig          --> define and maintain consistent coding styles between different editors
      |- .gitignore             --> specify directories and files to be to ignored by git
      |- .jshintrc              --> JavaScript code quality tool 
      |- bower.json             --> specify client site dependencies
      |- CHANGELOG.md           --> record of changes made to a project
      |- gulpfile.js            --> front-end and JavaScript workflow tasks runner
      |- package.json           --> specify module npm dependencies
      |- README.md              --> summary of the project  

**Build:**

    build/               
      |- dist                       --> distribution source code that goes to production
      |  |- client/                     --> client code
      |  |  |- assets/                    --> emberJS-agnostic presentation artifacts 
      |  |  |  |- fonts/                     --> fonts
      |  |  |  |- images/                    --> image files
      |  |  |  |- styles/                    --> css files 
      |  |  |     |- app.min-12345.css          --> concat & minify app css files 
      |  |  |     |- lib.min-12345.css          --> concat & minify 3rd party lib css files 
      |  |  |- scripts/                   --> js files 
      |  |  |  |- app.min-12345.js           --> concat, minify angular app js files and cached html templates
      |  |  |  |- lib.min-12345.js           --> concat & minify 3rd party lib js files 
      |  |  |- index.html                 --> app main file
      |  |- server/                     --> server code 
      |- docs/                      --> app documentation    
      |- test-reports/              --> app test-reports (coverage, failure screenshots etc.)      

## Installation & Configuration

### Platform & tools

You need to install Node.js and then the development tools. Node.js comes with a package manager called [npm](http://npmjs.org) (requires npm version >= 1.3.0 for this project) for installing NodeJS applications and libraries.
* [Install node.js](http://nodejs.org/download/) (requires node.js version >= 0.10.0)
* [Install Gulp](http://gulpjs.com/) as global npm modules (requires node.js version >= 0.10.0):

    ```bash
    $ npm install -g gulp
    ```

* [Install Bower](http://http://bower.io/) as global npm modules (requires node.js version >= 0.10.0):

    ```bash
    $ npm install -g bower
    ```

### App
Run the following commands to download Time-Booker app:
    ```
    git clone git@github.com:cam-technologies/time-booker.git
    ```

* Install local dependencies:

    ```bash
    $ npm install
    $ gulp install
    ```
* Make sure all [bower](bower.json) dependencies are added to [index.html](client/src/app/index.html) after ```gulp wiredep``` task was executed:

    ```HTML
    <!-- bower:css -->
       <link rel="stylesheet" href=".."/>
    <!-- endbower -->
    <!-- bower:js -->
       <script src=".."></script>
    <!-- endbower -->
    ```
    
> **Note:** Verify that all 3rd party dependencies from [package.json](package.json) and [bower.json](bower.json) are installed on your local machine. If you have followed the instructions and there have been no errors when executing the above commands, the dependencies should be installed.

## Running App

### Start the Server (development env)
* Run the server:

    ```bash
    $ node server/src/server.js
    ```

* Browse to the application at [http://localhost:3000](http://localhost:3000)

### Start the Server (production env)
* Run the server:

    ```bash
    $ gulp build
    $ cd build/dist
    $ npm install --production
    $ NODE_ENV=production node server/src/server.js
    ```
    
* Browse to the application at [http://localhost:5000](http://localhost:5000)

## Gulp tasks
The best way to learn about the gulp tasks is by familiarizing yourself with [Gulp](http://gulpjs.com/) and then reading through the documented [gulpfile.js](gulpfile.js) script.

###Sub Tasks:###

* `gulp clean` - will delete `build` and `.tmp` directories
* `gulp copy` - will copy project files that haven't been copied by 'compile' task e.g. (fonts, etc.) into 'build' folder
* `gulp csslint` - will run linter against css files in `public/assets/styles`
* `gulp jshint` - will run linter against javascript files
* `gulp htmlhint` - will run linter against html files
* `gulp images` - will minify images `public/assets/images`
* `gulp templates` - will replace local links with CDN links for images inside of templates, minify html templates and then put all templates into strings in a JavaScript file that will add the template to AngularJS's [`$templateCache`](http://docs.angularjs.org/api/ng.$templateCache) so template files are part of the initial JavaScript payload and do not require any future XHR. The template cache files are `.tmp/scripts/templates.js`
* `gulp bower` - will install all bower components specify in [`bower.json`](bower.json) from bower repository
* `gulp bower-install` - will do the same as `bower` task but also inject bower components to [`index.html`](public/index.html)
* `gulp watch` - will watching for file changes and run linter tasks against specific files, in addition browser will be refreshed with every change 
* `gulp compile` - will concatenate, minify, cdnize and revesion sources and place them by default into the `build/dist` directory
* `gulp bump` - will increase version number in [`package.json`](package.json) and [`bower.json`](bower.json)
* `gulp webdriver_update` - will downloads the selenium webdriver
* `gulp test-e2e` - will run e2e tests
* `gulp test-unit` - will run unit tests
* `gulp help` - will print all tasks with description of each task

###Main Tasks:###
The main gulp tasks are descriptive in `development`, `test`, `build` and `release` sections.

## Development
Whenever you're working on project, start with:

```bash
$ gulp 
```
This default gulp task will install bower dependencies, build dev enviroment, monitor the source files and run `csslint`, `jshint` and `htmlhint` tasks every time a file changes. The default gulp task also includes [Live Reload](http://livereload.com/), so you no longer have to refresh your page after making changes! The following code must be add to the end of the `body` tag in [index.html](public/index.html):

```html
<script src="http://localhost:35729/livereload.js?snipver=1"></script>
```

## Test
To run all unit and e2e tests in parallel run the follow task:

```bash
$ gulp test
```

## Build
The build task get app ready for production. The build tasks include concatenation, minification, compression, cdn etc.
To initiate a full build, you simply run the follow task:

```bash
$ gulp build
```
This will perform a build that is ready for uploading to the server! The build is located in `build/dist` directory. 

## Release
TODO: add release steps e.g. [https://github.com/angular-ui/bootstrap#release](https://github.com/angular-ui/bootstrap#release)

The release task will release a new version of our project. This task will also run the "end to end" (e2e) and unit tests. The e2e tests require the server to be started. To initiate a full release, you simply run the follow task:

```bash
$ gulp release
```

## Versioning

Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

And constructed with the following guidelines:

* Breaking backward compatibility bumps the major (and resets the minor and patch)
* New additions without breaking backward compatibility bumps the minor (and resets the patch)
* Bug fixes and misc changes bumps the patch

For more information on SemVer, please visit <http://semver.org/>.

Development Principles
----------------------

+ Time Booker will be developed using responsive web design techniques
+ Time Booker will be developed using suitable JavaScript and CSS frameworks
+ Time Booker will be developed in a manner that does not tie it to one specific database type
+ Time Booker will be developed in line with modern web architectural patterns
+ Time Booker will be developed in a manner that will support the addition of mobile clients in the future
+ Time Booker will be developed using Test Driven Development (TDD)
+ Time Booker will be developed using Continuous Integration, Delivery & Deployment
+ Time Booker will be developed in a manner that will support public cloud deployment
+ Time Booker will be developed using freely available tools and frameworks
+ Time Booker will be developed using tools and frameworks that are not tied to a single platform (e.g. Windows)

Contributing Code
-----------------

Time Booker follows the [Fork & Pull](https://help.github.com/articles/using-pull-requests) model
for collaborative development.

Authors
-------
[![Martin Micunda] (http://www.gravatar.com/avatar/5bce24c9beed55aaee9feca545defb8e.png?s=144)](https://github.com/martinmicunda) | [![Christopher Laughlin] (http://www.gravatar.com/avatar/2ff062148633bce06aa972be0ff1c244.png?s=144)](https://github.com/chrislaughlin) | [![Andrew McDowell] (http://www.gravatar.com/avatar/2ff06214863ce06aa972be0ff1c244.png?s=144)](https://github.com/madole)
:---:|:---:|:---:
[Martin Micunda] (https://github.com/martinmicunda) | [Christopher Laughlin] (https://github.com/chrislaughlin) | [Andrew McDowell] (https://github.com/madole)

## License
The MIT License (MIT)

Copyright (c) 2014 C.A.M. Technologies

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
