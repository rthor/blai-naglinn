import gulp from 'gulp';
import jade from 'gulp-jade';
import config from '../config';
import errorHandler from '../utils/error-handler';

gulp.task('templates', () => {
  return gulp.src([`${config.source}/templates/**/*.jade`, `!${config.source}/templates/_**/*.jade`])
    .pipe(jade({
      pretty: config.debug,
      locals: {
        title: 'Blái naglinn',
        description: 'Baráttan gegn krabbameini',
        url: 'http://blainaglinn.is',
      }
    }))
    .on('error', errorHandler)
    .pipe(gulp.dest(config.target));
});
