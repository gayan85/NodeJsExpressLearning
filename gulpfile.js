var gulp = require('gulp');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');


var jsFiles = ['*.js', 'src/**/*.js'];

gulp.task("style", function () {
    return gulp.src(jsFiles)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish', {
            verbose : true
        }))
        .pipe(jscs());
});

gulp.task("inject", function () {
    var wiredep = require('wiredep').stream;
    var inject = require('gulp-inject');
    var injectSrc = gulp.src(['./content/styles/*.css', './content/js/*.js'], {read: false});
    var injectOptions =  { ignorePath : '/content'}
    var options = {
        bowerJson : require('./bower.json'),
        directory : './content/libs',
        ignorePath : '../../content'
    }
    return gulp.src('./src/views/*.jade')
        .pipe(wiredep(options))
        .pipe(inject(injectSrc, injectOptions))
        .pipe(gulp.dest('./src/views'));
});