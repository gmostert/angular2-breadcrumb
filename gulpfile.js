var gulp = require('gulp');

var PATHS = {
    src: '/**/*.ts'
};

gulp.task('clean', function (done) {
    var del = require('del');
    del(['dist'], done);
});

gulp.task('build', function () {
    var ts = require('gulp-typescript');
    var tsProject = ts.createProject('tsconfig.json', {declaration: true});

    var tsResult = tsProject.src()
        .pipe(ts(tsProject));
    tsResult.dts.pipe(gulp.dest('./')); // Generate d.ts files alongside ts files

    return tsResult.js.pipe(gulp.dest('')); // Generate js files alongside ts files
});

gulp.task('bundle', function() {
    var ts = require('gulp-typescript');

    var tsProject = ts.createProject('tsconfig.json', {
        module: 'system',
        outFile: 'ng2-breadcrumb.js' // outFile is only supported with the system module
    });

    var tsResult = tsProject.src()
        .pipe(ts(tsProject));

    return tsResult.js
        .pipe(gulp.dest('./bundles')); // Generate bundle file
});

gulp.task('default', ['clean','build']);