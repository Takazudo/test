module.exports = function (grunt) {

  grunt.task.loadNpmTasks('grunt-contrib-uglify');

  grunt.initConfig({
    uglify: {
      rollover: {
        src: 'js/rollover.js',
        dest: 'js/rollover.min.js'
      }
    }
  });

  grunt.registerTask('default', [ 'uglify' ]);

};
