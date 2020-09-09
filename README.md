# AngularMaterialSandbox

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

**Extra Helpful Notes**
***Getting started with Angular Material***
Angular Material depends on angular, angular-animate and angular-aria. If you're using bower or npm to manage your dependencies, then they will be automatically installed alongside angular-material.

1. Start by grabbing the source code for Angular Material
---------------------------------------------------------
$ npm install angular-material --save
---------------------------------------------------------

Or if you're not using any command line tool to download your dependencies, then continue reading and use the CDN links provided below.
---------------------------------------------------------
<html ng-app="app">
    <body>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular-animate.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.4.3/angular-aria.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/angular_material/0.10.0/angular-material.min.js"></script>

        <script src="main.js"></script>
    </body>
</html>
---------------------------------------------------------

2. Other command line commands
---------------------------------------------------------
$ npm install angular-material --save
$ npm install --save @angular/material @angular/cdk @angular/core @angular/common
$ npm install --save @angular/animations
$ npm install --save hammerjs

$ ng new Angular-Material-Sandbox
$ cd Angular-Material-Sandbox
$ ng generate module material
$ ng generate component toolbars
$ ng generate component buttons
$ ng generate component tables
---------------------------------------------------------


