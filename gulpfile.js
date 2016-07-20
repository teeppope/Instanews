var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var plumber = require('gulp-plumber');
var eslint = require('gulp-eslint');
var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require("gulp-rename");


gulp.task('hello', function() {
  console.log('Hello Terra');


// NOT SURE IF I"LL NEED THE BELOW < BUT STILL FIGURING IT OUT :)

  //Example of plumber task
  gulp.src('./src/*.ext')
    .pipe(plumber())
    .pipe(gulp.dest('./dist'));
});

// Static server
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
});

// ES lint example
gulp.src(['**/*.js','!node_modules/**'])
    .pipe(eslint({
        rules: {
            'my-custom-rule': 1,
            'strict': 2
        },
        globals: [
            'jQuery',
            '$'
        ],
        envs: [
            'browser'
        ]
    }))
    .pipe(eslint.formatEach('compact', process.stderr));

    //Gulp uglify example

    gulp.task('compress', function (cb) {
  pump([
        gulp.src('lib/*.js'),
        uglify(),
        gulp.dest('dist')
    ],
    cb
  );
});