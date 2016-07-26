var gulp = require('gulp'),
	sass = require('gulp-sass'),
	browserSync = require('browser-sync').create();

var sassFiles = './dev/css/**/*.scss';

gulp.task('hello', function(){
	console.log('Hi Terra, this gulp task is working.')
});

gulp.task('sass',function(){
 return gulp.src(sassFiles)
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build/css'))
    .pipe(browserSync.stream());
});

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch(sassFiles, ['sass']);
    gulp.watch('./*.html').on('change', browserSync.reload);

});