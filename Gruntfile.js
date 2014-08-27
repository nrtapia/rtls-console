module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    concat: {
        options: {
            separator: ';'
        },
        dist: {
            src: ['public/javascripts/jquery-2.1.1.min.js', 
	          'public/javascripts/holder.js',
	          'public/javascripts/bootstrap.min.js', 		  		  		  
		  'public/javascripts/angular.min.js',
		  'public/javascripts/app/*.js'
		  ],
            dest: 'public/js/<%= pkg.name %>.js'
        }
    },    
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'public/js/<%= pkg.name %>.js',
        dest: 'public/js/<%= pkg.name %>.min.js'
      }
    }
  });
  
  
  
  

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['concat','uglify']);

};