const { src, dest } = require('gulp');
const compileSass = require('gulp-sass')(require('sass'));

compileSass.compiler = require('node-sass');

function style() {
    return src('./sass/**/*.scss')
        .pipe(compileSass().on('error', compileSass.logError))
        .pipe(dest('./css/'))
};
  
exports.default = style;
  