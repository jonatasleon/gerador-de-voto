var gulp = require('gulp'),
    gutil = require('gulp-util'),
    jsonlint = require('gulp-jsonlint'),
    runSequence = require('gulp-run-sequence');

gulp.task('default', ['build']);

gulp.task('build', function() {
    runSequence(
        'jsonlint',
        'copy-files'
    );
});

gulp.task('jsonlint', function() {
    return gulp.src('./frases.json')
        .pipe(jsonlint())
        .pipe(jsonlint.reporter(function(file) {
            gutil.log('File ' + file.path + ' is not valid JSON');
        }));
});

gulp.task('copy-files', function() {
    var files = [
        './index.html',
        './frases.json',
        './.travis.yml',
        './js/*', './css/*',
        './bower_components/angular/angular.min.js'
    ];

    return gulp.src(files, {
        base: './'
    })
    .pipe(gulp.dest('./build/'));
});
