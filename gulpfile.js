var gulp = require('gulp');
var uglify = require("gulp-uglify");

var paths = {
    scripts: ['src/js/**/*.js']
};

gulp.task('js-minify', function() {
    gulp.src("src/js/*.js")
        .pipe(uglify())
        .pipe(gulp.dest("./assets/js"));
});

gulp.task('watch', function() {
    gulp.watch(paths.scripts, ['js-minify']);
});

// The default task (called when you run `gulp` from cli)
gulp.task('default', ['watch', 'js-minify']);