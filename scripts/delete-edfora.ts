import * as fs from 'fs-extra';

console.log(fs.readdirSync('./.vuepress/dist/edfora'));
fs.emptyDirSync('./.vuepress/dist/edfora');
console.log(fs.readdirSync('./.vuepress/dist/edfora'));
fs.rmdirSync('./.vuepress/dist/edfora');
