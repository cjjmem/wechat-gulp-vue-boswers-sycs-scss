var gulp = require('gulp')
var sass = require('gulp-sass')
var minify = require('gulp-minify-css')


gulp.task('default',function(){
  return gulp.src('assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    //.pipe(minify())
    .pipe(gulp.dest('assets/css'));
})

