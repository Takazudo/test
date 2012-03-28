/**
 * grunt
 * parallelwatch example for sass and coffee
 *
 * grunt: https://github.com/cowboy/grunt
 * sass: http://sass-lang.com/
 * CoffeeScript: http://coffeescript.org/
 * growlnotify: http://growl.info/extras.php#growlnotify
 */
module.exports = function(grunt){
  
  // Nodejs libs.
  var proc = require('child_process');

  grunt.initConfig({
    parallelwatch: {

      // watch config - 1
      sass: {
        files: [
          'common/scss/*.scss'
        ],
        tasks: 'sass notifyOK'
      },

      // watch config - 2
      coffee: {
        files: [
          'common/coffee/*.coffee'
        ],
        tasks: 'coffee notifyOK'
      }

    },
    sass: {
      'common/css/1.css': 'common/scss/1.scss',
      'common/css/2.css': 'common/scss/2.scss'
    },
    coffee: {
      'common/js/1+2.js':  [
        'common/coffee/1.coffee',
        'common/coffee/2.coffee'
      ]
    }
  });

  // I love growlnotiy though this is just for me.
  grunt.registerTask('notifyOK', 'done!', function(){
    proc.exec("growlnotify -t 'grunt.js' -m '＼(^o^)／'");
  });

  grunt.loadTasks('tasks');

  grunt.registerTask('default', 'sass coffee notifyOK');

};
