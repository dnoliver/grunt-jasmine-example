module.exports = function(grunt) {

  var gruntConfig = {};

  // jasmine task
  grunt.loadNpmTasks('grunt-contrib-jasmine');
 
  gruntConfig.jasmine = {
    options: {
      specs: 'test/**/*_spec.js',
      version: '2.0.0',
      outfile: 'test/SpecRunner.html',
      keepRunner: true,
      summary: true,
      host : 'http://127.0.0.1:8080/'
    }
  };

  // test all task
  gruntConfig.jasmine.all = {
    src: 'src/**/*.js',
  };

  // coverage task
  gruntConfig.jasmine.istanbul = {
    src: 'src/**/*.js',
    options: {
      template: require('grunt-template-jasmine-istanbul'),
      templateOptions: {
        coverage: 'coverage/coverage.json',
        report: 'coverage/report'
      }      
    }
  };

  // connect task
  grunt.loadNpmTasks('grunt-contrib-connect');
  
  gruntConfig.connect = {
    options: {
      port: 8080,
      hostname: '*'
    }
  };

  gruntConfig.connect.server = {
    options: {
      keepalive: true,
      debug: true
    }
  };

  gruntConfig.connect.test = {
    options: {}
  }

  // Project configuration.
  grunt.initConfig(gruntConfig);

  // Default task(s).
  grunt.registerTask('default', []);
  grunt.registerTask('server', ['connect:server']);
  grunt.registerTask('test', ['connect:test', 'jasmine:all']);
  grunt.registerTask('coverage', ['connect:test', 'jasmine:istanbul']);  
};
