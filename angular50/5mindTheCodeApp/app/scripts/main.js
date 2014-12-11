'use strict';

// require it like node
var angular = require('angular');
var WelcomeCtrl = require('./controllers/WelcomeCtrl');
var app = angular.module('myApp', []);
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
app.controller('WelcomeCtrl', [$scope, WelcomeCtrl]);


