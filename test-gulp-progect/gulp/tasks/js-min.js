import uglify from "gulp-uglify"
import rename from "gulp-rename";

export const jsMin = function () {
    return app.gulp.src(app.path.src.js)
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(app.gulp.dest(app.path.build.js))
}