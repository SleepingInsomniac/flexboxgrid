'use strict';

const config        = require('yaml-config').readConfig('config/gulp.yaml'),
      gulp          = require('gulp'),
      tasks         = require('require-dir')('gulp-tasks'),
      ARGV          = require('yargs').argv;

if (ARGV.silent) config.browsersync.open = false;
if (ARGV.port) config.browsersync.port = ARGV.port;

// call all of the task modules with the config parameters
for (var t in tasks) tasks[t](config);
      
gulp.task('default', [
  'build',
  'styles:example',
  'browser-sync',
  'watch'
]);

gulp.task('build', [
  'styles'
]);
