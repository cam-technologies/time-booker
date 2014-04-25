Time-Booker
===========

Web based time booking application, build using the **MEEN** stack. This application will allow users to manually enter work
times in blocks of hours and minutes for each day of the week.


Technology Stack
----------------

The technology stack will be built up of the [MEAN](http://www.mean.io/) stack and some other tools used for UI elements, testing, building and
deploying.

## MongoDB
[Mongo](http://www.mongodb.org/) DB will be made up from a number of collections held in a Mongo DB NoSql database.

## Express
[ExpressJS](http://expressjs.com/) will be used as the main REST interface this is a NodeJS plugin, this will handle all data being sent between
the client ad server.

## EmberJS
EmberJS will be used for the front end client interface this will handle all the client side processing and interact with
the server.

## NodeJS
NodeJS will be used as the backend server application that will process all interactions between the client and the database
also any other third party systems.

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
    
> *Note1: If you are getting error with github try this "git config --global url."https://".insteadOf git://".* <br />
> *Note2: Make sure all 3rd dependencies from package.json and bower.json are installed on your local machine.*

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
