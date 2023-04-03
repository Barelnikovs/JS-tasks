// Основной модуль
import gulp from "gulp";

// Импорт путей
import { path } from "./gulp/config/path.js"

// Импорт общих плагинов
import { plugins } from "./gulp/config/plagins.js";

// Передаём значения в глобальную переменную
global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins
}

// Импорт задач
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js";
import { html } from "./gulp/tasks/html.js";
import { jsMin } from "./gulp/tasks/js-min.js";
import { sassToCssMin } from "./gulp/tasks/sass-to-css-min.js";


// Функция наблюдатель за изменениями в файлах
function watcher() {
    gulp.watch(path.watch.files, copy)
    gulp.watch(path.watch.html, html)
    gulp.watch(path.watch.js, jsMin)
    gulp.watch(path.watch.sass, sassToCssMin)
}
// Построение подсценариев
const mainTask = gulp.parallel(copy, html, jsMin, sassToCssMin)

// Построение сценариев выполнения задач
const dev = gulp.series(reset, mainTask, watcher)

// Выполнение сценария по умолчанию
gulp.task('default', dev);
