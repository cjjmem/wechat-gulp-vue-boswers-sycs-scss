var gulp = require('gulp')
var sass = require('gulp-sass')
var minify = require('gulp-minify-css')
var watch = require('gulp-watch')


gulp.task('default',function(){


/*  return gulp.src('assets/scss/!**!/!*.scss')
    .pipe(sass().on('error', sass.logError))
    //.pipe(minify())
    .pipe(gulp.dest('assets/css'));*/

  return watch('assets/scss/**/*.scss',function(){
    gulp.src('assets/scss/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      //.pipe(minify())
      .pipe(gulp.dest('assets/css'));
  });

})

