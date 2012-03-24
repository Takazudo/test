/**
 * grunt
 * (sass + cssmin) example
 *
 * grunt: https://github.com/cowboy/grunt
 * sass: http://sass-lang.com/
 * sqwish: https://github.com/ded/sqwish
 * growlnotify: http://growl.info/extras.php#growlnotify
 */
module.exports = function(grunt){

  var proc = require('child_process');
  var log = grunt.log;

  grunt.initConfig({
    watch: {
      files: [
        '../common/scss/*.scss'
      ],
      tasks: 'sass concat cssmin notifyOK'
    },
    sass: {
      '../common/css/1.css': '../common/scss/1.scss',
      '../common/css/2.css': '../common/scss/2.scss'
    },
    concat:  {
      '../common/css/all.css' : [
        '../common/css/1.css',
        '../common/css/2.css'
      ]
    },
    cssmin: {
      '../common/css/all.min.css': '../common/css/all.css'
    }
  });

  grunt.registerMultiTask('sass', 'sass compile', function() {
    var done = this.async();
    var src = this.file.src;
    var dest = this.file.dest;
    var command = 'sass ' + src + ' ' + dest;
    proc.exec(command, function(err, sout, serr){
      if(serr.indexOf('error')>-1){
        proc.exec("growlnotify -t 'SASS COMPILE ERROR!!!' -m '" + serr + "'");
        log.writeln('File ' + dest + ' failed.');
        done(false);
      }else{
        log.writeln('File ' + dest + ' created.');
        done(true);
      }
    });
  });

  grunt.registerMultiTask('cssmin', 'minify css', function() {
    var done = this.async();
    var src = this.file.src;
    var dest = this.file.dest;
    var command = 'sqwish ' + src + ' -o ' + dest;
    var out = proc.exec(command, function(err, sout, serr){
        log.writeln('File ' + dest + ' created.');
        done(true);
    });
  });

  grunt.registerTask('notifyOK', 'done!', function(){
    proc.exec("growlnotify -t 'grunt.js' -m '＼(^o^)／'");
  });

  grunt.registerTask('default', 'sass concat cssmin notifyOK');

};
