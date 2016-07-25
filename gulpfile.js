var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create();

gulp.task('hello', function(){
	console.log('Hi Terra, this gulp task is working.')
});

gulp.task('sass',function(){
 return gulp.src('./dev/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./dev"
        }
    });
});