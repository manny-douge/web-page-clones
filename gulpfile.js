var gulp = require('gulp');
var browserSync = require('browser-sync').create();
gulp.task('browserSync',function()
{
    browserSync.init
    ({
        server: "app"
    })
});
gulp.task('watch',['browserSync'], function()
{
    //console.log('Reloaded');
    gulp.watch('app/*.html',browserSync.reload);
    gulp.watch('app/js/**/*.js',browserSync.reload);
    gulp.watch('app/css/*.css',browserSync.reload);
    gulp.watch('app/css/**/*.css',browserSync.reload);
});
gulp.task('hello',function()
{
    console.log('What\'s up my dude');
});
