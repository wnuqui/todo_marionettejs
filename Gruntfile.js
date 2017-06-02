'use strict';

/*global module:false*/
module.exports = function(grunt) {
    // Load grunt tasks automatically
    require('load-grunt-tasks')(grunt);

    // Configurable paths for the application
    var appConfig = {
        path: require('./bower.json')['appPath'] || '.',
        dist: 'dist'
    };

    // Project configuration.
    grunt.initConfig({
        app: appConfig,

        // Metadata.
        pkg: grunt.file.readJSON('package.json'),

        wiredep: {
            app: {
                src: ['index.html'],
                ignorePath: /\.\.\//
            },
            karmaTestRunner: {
                devDependencies: true,
                src: ['karma.conf.js'],
                ignorePath: /\.\.\//,
                fileTypes: {
                    js: {
                        block: /(([\s\t]*)\/{2}\s*?bower:\s*?(\S*))(\n|\r|.)*?(\/{2}\s*endbower)/gi,
                        detect: {
                            js: /'(.*\.js)'/gi,
                            css: /<link.*href=['"]([^'"]+)/gi
                        },
                        replace: {
                            js: '\'{{filePath}}\',',
                            css: '<link rel="stylesheet" href="{{filePath}}" />'
                        }
                    }
                }
            },
            htmlTestRunner: {
                devDependencies: true,
                src: 'tests/unit/tests.runner.html',
                fileTypes: {
                    js: {
                        replace: {
                            js: '\'..\/..\/{{filePath}}\','
                        }
                    }
                }
            }
        },

        // Test settings
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        },

        // Make sure code styles are up to par and there are no obvious mistakes
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            all: {
                src: [
                    'Gruntfile.js',
                    '<%= app.path %>/**/*.js',
                    '*.js',
                    '!<%= app.path %>/bower_components/**',
                    '!<%= app.path %>/node_modules/**',
                    '!<%= app.path %>/tests/js/**',
                    '!<%= app.path %>/tests/unit/**'
                ]
            },
            test: {
                options: {
                    jshintrc: '.jshintrc'
                },
                src: [
                    'karma.conf.js',
                    'karma.*.conf.js',
                    '<%= app.path %>/tests/**/*.spec.js'
                ]
            }
        },

        casperjs: {
            options: {
                async: {
                    parallel: false
                },
                casperjsOptions: ['--casperJS-option']
            },
            files: ['tests/e2e/**/*.js']
        },

        // Mocha
        mocha: {
            all: {
                src: ['tests/unit/tests.runner.html'],
            },
            options: {
                run: true
            }
        },

        shell: {
            serve: {
                command: 'httpster -s -p 3333'
            }
        }
    });

    // Default task
    grunt.registerTask('default', ['wiredep', 'jshint', 'mocha', 'casperjs']);

    grunt.registerTask('unit', ['wiredep', 'jshint', 'mocha']);

    grunt.registerTask('e2e', ['wiredep', 'jshint', 'casperjs']);
};
