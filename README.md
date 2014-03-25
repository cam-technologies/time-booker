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
    $ gulp wiredep
    ```
* Make sure all [bower](https://github.com/cam-technologies/time-booker/blob/master/bower.json) dependencies are added to [index.html](https://github.com/cam-technologies/time-booker/blob/master/client/app/index.html) after ```gulp wiredep``` task was executed:

    ```HTML
    <!-- bower:css -->
       <link rel="stylesheet" href=".."/>
    <!-- endbower -->
    <!-- bower:js -->
       <script src=".."></script>
    <!-- endbower -->
    ```
    
*Note1: If you are getting error with github try this "git config --global url."https://".insteadOf git://".* <br />
*Note2: Make sure all 3rd dependencies from package.json and bower.json are installed on your local machine.*

## Running App

### Start the Server
* Run the server:

    ```bash
    $ node server/server.js
    ```

* Browse to the application at [http://localhost:3000](http://localhost:3000)


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/chrislaughlin/time-booker/trend.png)](https://bitdeli.com/free "Bitdeli Badge")
