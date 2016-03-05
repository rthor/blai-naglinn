import gulp from 'gulp';
import gutil from 'gulp-util';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import minifyCSS from 'gulp-minify-css';
import config from '../config';
import plumber from 'gulp-plumber';
import errorHandler from '../utils/error-handler';

gulp.task('styles', () => {
  return gulp.src(config.source + '/styles/main.scss')
    .pipe(plumber({errorHandler: errorHandler}))
    .pipe(sass({
      includePaths: [
        config.source + '/styles',
        config.source + '/components',
        'node_modules'
      ],
    }))
    .pipe(config.minify ? minifyCSS() : gutil.noop())
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1']
    }))
    .pipe(gulp.dest(config.target + '/styles'));
});
