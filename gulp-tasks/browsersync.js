module.exports = function(config) {

  "use strict";

  const gulp          = require('gulp'),
        browserSync   = require('browser-sync').create('syncBrowser');

  let handleError = function(error) {
    'use strict';
    console.log("\n\u0007");
    console.log(error);
    console.log("\n");
    this.emit('end');
  }

  gulp.task('browser-sync', () => {
    browserSync.init(config.browsersync);
  });

  gulp.task('watch', () => {
    gulp.watch(config.watchpaths.styles, ['styles', 'styles:example']).on('error', handleError);
    gulp.watch(config.watchpaths.reload).on('change', browserSync.reload).on('error', handleError);
  });
}
