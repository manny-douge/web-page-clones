var gulp = require('gulp');
var browserSync = require('browser-sync').create();
gulp.task('browserSync',function(){
    browserSync.init({
        server: {baseDir:'app'},
                    })
            });
gulp.task('watch',['browserSync'], function()
{
    gulp.watch('app/*.html',browserSync.reload);
    gulp.watch('app/js/**/*.js',browserSync.reload);
});
gulp.task('hello',function()
{
    console.log('What\'s up my dude');
});
