[![Build Status](https://secure.travis-ci.org/cam-technologies/time-booker.png)](http://travis-ci.org/cam-technologies/time-booker) [![Dependency Status](https://david-dm.org/cam-technologies/time-booker.png)](https://david-dm.org/cam-technologies/time-bookerp) [![devDependency Status](https://david-dm.org/cam-technologies/time-booker/dev-status.png)](https://david-dm.org/cam-technologies/time-booker#info=devDependencies) [![Coverage Status](https://coveralls.io/repos/cam-technologies/time-booker/badge.png)](https://coveralls.io/r/cam-technologies/time-booker)
Time-Booker
===========

Web based time booking application, build using the **MEEN** stack. This application will allow users to manually enter work times in blocks of hours and minutes for each day of the week.

[Click here to see it in action!](http://time-booker.herokuapp.com/)

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
    * [Qunit](http://qunitjs.com/)
    * [Karma](http://karma-runner.github.io/)
    * [Phantom](http://phantomjs.org/)
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
      |  |- .jshintrc               --> JavaScript code quality tool for client code
      |- server/                --> all server code   
      |  |- src/                    --> server source code files
      |  |- test/                   --> server test code
      |  |  |- config/                  --> configuration files for unit (karma) test
      |  |  |- unit/                    --> unit test files
      |  |- .jshintrc               --> JavaScript code quality tool for server code
      |- .bowerrc               --> specify where bower dependencies should be installed
      |- .editorconfig          --> define and maintain consistent coding styles between different editors
      |- .gitignore             --> specify directories and files to be to ignored by git
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

You need to install Node.js and then the development tools. Node.js comes with a package manager called
[npm](http://npmjs.org) (requires npm version >= 1.3.0 for this project) for installing NodeJS applications and libraries.
Note you should run these commands as admin.
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
    $ NODE_ENV=production node server/server.js
    ```
    
* Browse to the application at [http://localhost:5000](http://localhost:5000)

## Gulp tasks
The best way to learn about the gulp tasks is by familiarizing yourself with [Gulp](http://gulpjs.com/) and then reading through the documented [gulpfile.js](gulpfile.js) script.

###Sub Tasks:###
| Command                          | Description | 
| -------------------------------- | ----------- | 
| `gulp clean` | will delete `build` and `client/src/tmp` directories | 
| `gulp copy` | will copy project files that haven't been copied by 'compile' task e.g. (fonts, etc.) into 'build' folder | 
| `gulp csslint` | will run linter against css files in `client/src/assets/styles` | 
| `gulp jshint:client` | will run linter against client javascript files |
| `gulp jshint:server` | will run linter against server javascript files |
| `gulp htmlhint` | will run linter against html files | 
| `gulp images` | will minify images `client/src/assets/images` |
| `gulp templates` | |
| `gulp bower` | will install all bower components specify in [`bower.json`](bower.json) from bower repository | 
| `gulp bower-install`    | will do the same as `bower` task but also inject bower components to [`index.html`](client/src/index.html) |
| `gulp watch` |  will watching for file changes and run linter tasks against specific files, in addition browser will be refreshed with every change | 
| `gulp compile` | will concatenate, minify, cdnize and revesion sources and place them by default into the `build/dist` directory | 
| `gulp webdriver_update` | will update/install the selenium webdriver |
| `gulp help` | will print all tasks with description of each task |

###Main Tasks:###
The main gulp tasks are descriptive more in `development`, `test`, `build` and `release` sections.

| Command                          | Description | 
| -------------------------------- | ----------- |
| `gulp install` | will install bower dependencies and generate config-env.js file |
| `gulp` | will run default task that watches for changes and run `jshint`, `csslint`, `htmlhint` |
| `gulp test:e2e` | will run e2e tests |
| `gulp test:unit` | will run unit tests |
| `gulp test` | will run both the e2e and unit test tasks |
| `gulp build` | will create build that is ready for uploading to the server |
| `gulp bump` | will increment version number in [`package.json`](package.json) and [`bower.json`](bower.json)|
| `gulp changelog` | will generate changelog in [`CHANGELOG.md`](CHANGELOG.md) |
| `gulp release` | will release and push [`package.json`](package.json) and [`CHANGELOG.md`](CHANGELOG.md) to GitHub repo |

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
App test-reports (coverage, failure screenshots etc.) can be found under `build/test-reports/` directory.

* **Unit test examples:**

   This will run test against `PhantomJS` and code specify in `src/` folder:
   ```bash
   $ gulp test:unit
   ```
   This will run test against `Chrome` and code specify in `build/dist/` folder:
   ```bash
   $ gulp test:unit --browsers=Chrome --env=production
   ```
   To run test against multiple browsers at the same time run follow task:
   **TODO: (martin)** this task is not supported yet!
   ```bash
   $ gulp test:unit --browsers=Chrome,Firefox,Safari 
   ```
   > NOTE: Verify that the browsers you want to run test against are installed on your local machine. The `PhantomJS` should be already installed after you run `npm install`.

* **E2E test:**

   The E2E tests will run via the qunit test runner via the bowser or gulp
   ```bash
   $ gulp test:e2e
   ```
   Running via the browser:
   open testRunner.html in your browser and the tests will run, when running the tests in the browser you will need to clear the local storage after every run.
   Open the browser console and run the following:
   ```javascript
   localStorage.clear();
   ```

## Build
The build task get app ready for production. The build task include test:unit, test:e2e, concatenation, minification, compression, cdn etc. If there have been no errors when executing the build command, the build should be located in `build/dist` directory and this build is ready for uploading to the server!. To initiate a full build, you simply run the follow task:
```bash
$ gulp build
```

If for some reason you don't want to run the test but just generate the files - **not a good idea(!!)** - you can simply run the build task with argument `--notest`: 
```bash
$ gulp build --notest
```

## Release

> Before releasing make sure there is no failing Jenkins build for this project. During the release process only [`package.json`](package.json) and [`CHANGELOG.md`](CHANGELOG.md) files should be edited and all steps should be done with **gulp tasks** and **not manually**!

- Almost all of the logic for releasing this project is done on the Jenkins server
- To push a new release:
  1. Update [`package.json`](package.json) version to new version with `gulp bump --type=(major|minor|patch)` 
  2. Generate changelog with `gulp changelog`
  3. Go through the changelog, and fix any mistakes or clarify any unclear commit messages
  4. Commit and push [`package.json`](package.json) and [`CHANGELOG.md`](CHANGELOG.md) with `gulp release` 
- Jenkins will detect that this commit changed the version in [`package.json`](package.json) and push out all necessary for this new release (tags, publish to private npm, etc ...)

## Commit Conventions
Use these [commit conventions](https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit) to generate a changelog from git metadata. Some example output can be found [here](https://github.com/driftyco/ionic/blob/master/CHANGELOG.md).

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
