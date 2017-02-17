var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function() {
    gulp.src('sass/main.sass')
        .pipe(sass({
            includePaths: ['sass']
        }))
        .pipe(gulp.dest('css'));
});

gulp.task('browser-sync', function() {
    browserSync.init(["css/*.css", "js/*.js", "**/*.html"], {
        server: {
            baseDir: "./"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function() {
    gulp.watch("sass/*.sass", ['sass']);
});
