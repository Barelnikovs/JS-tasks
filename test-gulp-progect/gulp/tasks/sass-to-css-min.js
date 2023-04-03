import concat from "gulp-concat"
import cleanCSS from "gulp-clean-css"
import rename from "gulp-rename";
import dartSass from 'sass';
import gulpSass from 'gulp-sass';
const sass = gulpSass(dartSass);

export const sassToCssMin = function () {
    return app.gulp.src(app.path.src.sass)
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(cleanCSS())
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(app.gulp.dest(app.path.build.css))
}