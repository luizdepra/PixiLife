module.exports = function (grunt) {
  'use strict';

  var banner = [
    '/**',
    ' * <%= pkg.name %> <%= pkg.version %>',
    ' * <%= pkg.homepage %>',
    ' * Copyright (c) 2013 Luiz de Prá (AKA RawArkanis) http://luizdepra.com.br',
    ' * <%= pkg.description %>',
    ' * built on: ' + new Date(),
    ' */',
    ''].join("\n");

  grunt.initConfig({
    // Configs
    pkg: grunt.file.readJSON('package.json'),
    dir: {
      build: 'build',
      src: 'src',
      js: 'js',
      css: 'css',
      res: 'res'
    },
    bundle: {
      dev: 'pixilife.js',
      release: 'pixilife.min.js'
    },
    // Clean
    clean: ['<%= dir.build %>/*'],
    // Copy
    copy: {
      main: {
        files: [
          {expand: true, flatten: true, src: ['<%= dir.src %>/*'], dest: '<%= dir.build %>/', filter: 'isFile'},
          {expand: true, flatten: true, src: ['<%= dir.src %>/<%= dir.css %>/**'], dest: '<%= dir.build %>/<%= dir.css %>/'},
          {expand: true, flatten: true, src: ['<%= dir.src %>/<%= dir.res %>/**'], dest: '<%= dir.build %>/<%= dir.res %>/'}
        ]
      }
    },
    // JSHint
    jshint: {
      options: {
        jshintrc: 'jshintrc'
      },
      src: {
        src: [
          'Gruntfile.js',
          '<%= dir.src %>/**/*.js'
        ],
        options: {
            ignores: ['<%= dir.src %>/<%= dir.js %>/<%= bundle.dev %>']
        }
      },
      dev: {
        src: '<%= dir.src %>/<%= dir.js %>/<%= bundle.dev %>'
      }
    },
    // Uglify
    uglify: {
      options: {
        banner: banner
      },
      release: {
        options: {
          wrap: true
        },
        files: {
          '<%= dir.build %>/<%= dir.js %>/<%= bundle.release %>': '<%= dir.build %>/<%= dir.js %>/<%= bundle.release %>'
        }
      }
    },
    // Browserify
    browserify: {
      dev: {
        files: {
          '<%= dir.src %>/<%= dir.js %>/<%= bundle.dev %>': ['<%= dir.src %>/<%= dir.js %>/**/*.js']
        }
      },
      release: {
        files: {
          '<%= dir.build %>/<%= dir.js %>/<%= bundle.release %>': ['<%= dir.src %>/<%= dir.js %>/**/*.js']
        }
      }
    },
    // Connect
    connect: {
      server: {
        options: {
          port: 4321,
          base: '<%= dir.src %>',
          keepalive: true
        }
      }
    }
  });

  // Load Tasks
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Register Tasks
  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['clean', 'copy', 'jshint:src', 'browserify:release', 'uglify:release']);
  grunt.registerTask('build-dev', ['jshint:src', 'browserify:dev']);
  grunt.registerTask('server', ['connect:server']);
};
