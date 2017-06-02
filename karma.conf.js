'use strict';

// Karma configuration

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha'],




        // list of files / patterns to load in the browser
        files: [
            // bower:js
            'bower_components/jquery/dist/jquery.js',
            'bower_components/underscore/underscore.js',
            'bower_components/backbone/backbone.js',
            'bower_components/backbone.babysitter/lib/backbone.babysitter.js',
            'bower_components/backbone.wreqr/lib/backbone.wreqr.js',
            'bower_components/marionette/lib/core/backbone.marionette.js',
            'bower_components/mocha/mocha.js',
            'bower_components/chai/chai.js',
            // endbower
            'app/lib/util.js',
            'app/application.js',
            'app/models/todo.js',
            'app/collections/todos.js',
            'app/views/layout.js',
            'app/views/todo.list.js',
            'app/views/todo.input.js',
            'app/mixins/statuses.js',
            'app/start.js',
            'tests/unit/*.js'
        ],


        client: {
          mocha: {
            reporter: 'html', // change Karma's debug.html to the mocha web reporter
            ui: 'bdd'
          }
        },


        // list of files to exclude
        exclude: [
        ],


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['mocha'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};
