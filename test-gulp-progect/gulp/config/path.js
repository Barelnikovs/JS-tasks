import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve()) // корневая папка

const buildFolder = `./dist`; // папка с прошедшими обработку файлами
const srcFolder = `./src`; // папка с исходными файлами

export const path = {
    build: {
        js: `${buildFolder}/`,
        css: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        html: `${buildFolder}/`
    },
    src: {
        js: `${srcFolder}/js/*.js`,
        sass: `${srcFolder}/sass/*.sass`,
        img: `${srcFolder}/img`,
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/*.html`
    },
    watch: {
        js: `${srcFolder}/js/*.js`,
        sass: `${srcFolder}/sass/*.sass`,
        files: `${srcFolder}/files/**/*.*`,
        html: `${srcFolder}/**/*.html`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: ``
}