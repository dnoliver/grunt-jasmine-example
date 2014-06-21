module.exports = function(grunt) {

  var gruntConfig = {};

  // jasmine task
  grunt.loadNpmTasks('grunt-contrib-jasmine');
 
  gruntConfig.jasmine = {
    options: {
      specs: 'test/**/*_spec.js',
      version: '2.0.0',
      outfile: 'SpecRunner.html',
      keepRunner: true,
      summary: true,
      host : 'http://127.0.0.1:8080/'
    }
  };

  // test all task
  gruntConfig.jasmine.all = {
    src: 'src/**/*.js',
  };

  gruntConfig.jasmine.teamcity = {
    src: 'src/**/*.js',
    options: {
      helpers: [
        'jasmine-reporters/src/jasmine.teamcity_reporter.js', 
        'test/harness.js'
      ]
    }
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

  // clean task
  grunt.loadNpmTasks('grunt-contrib-clean');

  gruntConfig.clean = {
    all: {
      src: ['SpecRunner.html', 'coverage']
    }
  };

  // Project configuration.
  grunt.initConfig(gruntConfig);

  // Default task(s).
  grunt.registerTask('default', []);
  grunt.registerTask('server', ['connect:server']);
  grunt.registerTask('test', ['connect:test', 'jasmine:all']);
  grunt.registerTask('teamcity', ['connect:test', 'jasmine:teamcity']);
  grunt.registerTask('coverage', ['connect:test', 'jasmine:istanbul']);  
};
