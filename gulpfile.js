var gulp = require('gulp');
var gutil = require('gulp-util');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;

gulp.task('server', function() {
  browserSync.init({
    server: './'
  })
})

gulp.task('build-css', function() {
  return gulp.src('style.scss')
  .pipe(sass())
  .pipe(gulp.dest('css'))
})

gulp.task('watch', function() {
  gulp.watch("style.scss", ['build-css', reload])
  gulp.watch("js/main.js").on('change', reload)
  gulp.watch('*.html').on('change', reload)
})

gulp.task('default', ['server', 'watch'])
