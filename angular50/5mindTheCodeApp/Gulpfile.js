/**
 * Created by john on 12/11/14.
 */
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean');

// Modules that allow us to run a mini express server

//embedlr = require('gulp-embedlr'),
var  refresh = require('gulp-livereload'),
    express = require('express'),
    livereload = require('connect-livereload'),
    livereloadport = 35729,
    serverport = 5000;

// Set up an express server (but not starting it yet)

var server = express();

//Add live reload
server.use(livereload({port: livereloadport}));

//Use our 'dist' folder as rootfolder
server.use(express.static('./dist'));

//Because I like HTML5 pushstate .. this redirects everything back to our index.html

server.all('/*', function(req, res) {
    res.sendFile('index.html', {root: 'dist'});
});

// make sure we can watch our javascript files, and as they change, run them through JSHint and have Browserify bundle the code into a single file.

// JSHint task
gulp.task('lint', function() {
    gulp.src('./app/scripts/*.js')
        .pipe(jshint())
        // You can look into pretty reporters as well, but that's another story
        .pipe(jshint.reporter('default'));
});

gulp.task('browserify', function() {
    // Single point of entry (make sure not to src ALL your files, browserify will figure it out for you)
    gulp.src(['app/scripts/main.js'])
        .pipe(browserify({
            insertGlobals: true,
            debug:true
        }))
        // Bundle to a single file
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', ['lint'], function() {
    // Watch our scripts
    gulp.watch(['app/scripts/*.js', 'app/scripts/**/*.js'], [
        'lint',
        'browserify'
    ]);
});

gulp.task('views', function() {
    //Get our index.html
    gulp.src('app/index.html')
        .pipe(gulp.dest('dist/'));

    //Any other view files form app/views
    gulp.src('./app/views/**/*')
        // Will be put in the dist/views folder
        .pipe(gulp.dest('dist/views/'));
});

// Setting up another watcher

gulp.watch(['app/index.html', 'app/views/**/*.html'], ['views']);
gulp.watch(['app/styles/**/*.scss'], [
    'styles'
]);
gulp.watch('./dist/**').on('change', refresh.changed);
// start the server

// Dev task
gulp.task('dev', function(){
    //Start webserver
    server.listen(serverport);
    // Start live reload
    refresh.listen(livereloadport);


});

gulp.task('styles', function() {
   gulp.src('app/styles/*.scss')
    // the one error handler that prevents Gulp from crashing if you make a mistake in your Sass
       .pipe(sass({onError: function(e) {console.log(e);}}))
       // optionally add a autoprefixer
       .pipe(autoprefixer("last 2 versions", "> 1%", "ie 8"))
       .pipe(gulp.dest('dist/css/'));
});

gulp.task('default', ['dev', 'watch']);