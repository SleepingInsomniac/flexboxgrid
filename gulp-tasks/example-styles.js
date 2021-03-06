module.exports = function(config) {
  
  "use strict";

  const gulp          = require('gulp'),
        gulpif        = require('gulp-if'),
        browserSync   = require('browser-sync').get('syncBrowser'),
        sass          = require('gulp-sass'),
        // sass          = require('gulp-ruby-sass'),
        autoprefixer  = require('gulp-autoprefixer'),
        concat        = require('gulp-concat'),
        sourcemaps    = require('gulp-sourcemaps');

        config = config.example;

  let handleError = function(error) {
    'use strict';
    console.log("\n\u0007"); // terminal bell character
    console.log(error.messageFormatted);
    this.emit('end');
  }
  
  gulp.task('styles:example', () => {
    return gulp.src(config.sources)
      .pipe(sourcemaps.init())
        .pipe(sass(config.options))
          .on('error', handleError)
        .pipe(autoprefixer())
          .on('error', handleError)
        .pipe(concat(config.concat))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.dest))
      .pipe(browserSync.stream());
  });
  
}
