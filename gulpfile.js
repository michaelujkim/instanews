var gulp = require('gulp'),
uglify = require('gulp-uglify'),
rename = require('gulp-rename'),
browserSync = require('browser-sync');
var gulp = require('gulp');
var eslint = require('gulp-eslint');



gulp.task('scripts',['lint'], function(){
gulp.src('./js/*.js')
.pipe(uglify())
.pipe(rename({ extname: '.min.js' }))
.pipe(gulp.dest('./build/js'));

});

gulp.task('lint', function(){

    return gulp.src(['./js/*.js'])
        
        .pipe(eslint())
       
        .pipe(eslint.format())
        
        .pipe(eslint.failAfterError());
  
});


gulp.task('watch', function() {
  gulp.watch('js/*.js', ['scripts']);
});

gulp.task('browser-sync',function(){
  browserSync.init({
    server:{
      baseDir:"./"
    }
  
});
    gulp.watch(['*.html','build/css/*.css','build/js/*.js']).on('change',browserSync.reload);
  
});
// Modify our default task method by passing an array of task names

gulp.task('default', ['watch', 'browser-sync']);