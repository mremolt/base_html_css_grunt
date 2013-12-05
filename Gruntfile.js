module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    express: {
      options: {
      // Override defaults here
      },
      dev: {
        options: {
          script: 'server.js'
        }
      }
    },

    watch: {
      express: {
        files:  [ '**/*.html', '**/*.css' ],
        options: {
          livereload: true,
        },
      },
      sass: {
        files:  [ '**/*.scss' ],
        tasks:  [ 'sass' ]
      }
    },

    sass: {
      dist: {
        files: {
          'css/screen.css': 'scss/screen.scss'
        }
      },
      dev: {
        options: {
        },
        files: {
          'css/screen.css': 'scss/screen.scss'
        }
      }
    }

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-express-server');
  grunt.loadNpmTasks('grunt-sass');

  // Default task(s).
  grunt.registerTask('server', [ 'express:dev', 'watch' ]);

};
