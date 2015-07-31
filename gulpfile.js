'use strict';

var gulp = require('gulp'),
    changed = require('gulp-changed'),
    sass = require('gulp-sass'),
    csso = require('gulp-csso'),
    runSequence = require('run-sequence'),
    autoprefixer = require('autoprefixer-core'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    source = require('vinyl-source-stream'),
    buffer = require('vinyl-buffer'),
    eslint = require('gulp-eslint'),
    babelify = require('babelify'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    notify = require('gulp-notify'),
    browserSync = require('browser-sync'),
    sourcemaps = require('gulp-sourcemaps'),
    postcss = require('gulp-postcss'),
    image = require('gulp-image'),
    assign = require('object-assign'),
    reload = browserSync.reload,
    p = {
      tmp: '.tmp',
      dist: 'dist',
      source: 'app',
      jsx: 'app/index.jsx',
      scss: 'app/index.scss',
      bundle: 'index.js',
      tmpJs: '.tmp/js',
      tmpCss: '.tmp/css',
      tmpImages: '.tmp/images',
      tmpFonts: '.tmp/fonts'
    };

gulp.task('clean', function(cb) {
  del(['dist'], cb);
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: [p.source, p.tmp]
    }
  });
});

gulp.task('watchify', function() {
  // add custom browserify options here
  var customOpts = {
    entries: [p.jsx],
    debug: true,
    transform: [babelify.configure({stage: 1})]
  };
  var opts = assign({}, watchify.args, customOpts);
  var bundler = watchify(browserify(p.jsx, opts));

  function rebundle() {
    return bundler
      .bundle()
      .on('error', notify.onError())
      .pipe(source(p.bundle))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true})) // loads map from browserify file
      // Add transformation tasks to the pipeline here.
      .pipe(sourcemaps.write('./')) // writes .map file
      .pipe(gulp.dest(p.tmpJs))
      .pipe(reload({stream: true}));
  }

  bundler.on('update', rebundle);
  return rebundle();
});

gulp.task('browserify', function() {
  return browserify(p.jsx)
    .transform(babelify.configure({stage: 1}))
    .bundle()
    .pipe(source(p.bundle))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(uglify())
    .on('error', notify.onError())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(p.tmpJs));
});

gulp.task('styles', function() {
  return gulp.src(p.scss)
    .pipe(changed(p.tmpCss))
    .pipe(sass({errLogToConsole: true}))
    .on('error', notify.onError())
    .pipe(postcss([autoprefixer('last 1 version')]))
    .pipe(csso())
    .pipe(gulp.dest(p.tmpCss))
    .pipe(reload({stream: true}));
});


gulp.task('image', function () {
  return gulp.src('app/assets/images/*')
    .pipe(image())
    .pipe(gulp.dest(p.tmpImages));
});

gulp.task('lint', function() {
  return gulp.src(['src/**/*.{jsx,js}','!src/**/*-{mock,test}.js'])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('watch', function() {
  gulp.watch('src/**/*.scss', ['styles']);
  gulp.watch('src/**/*.jsx', ['lint']);
  gulp.watch('src/**/*.js', ['lint']);
  gulp.watch('src/assets/images/*', ['images']);
});

gulp.task('serve', ['clean'], function() {
  gulp.start(['browserSync', 'watch', 'watchify', 'styles', 'lint', 'image']);
});

gulp.task('copy-dist', function () {
  return gulp.src(['.tmp/**/*','app/index.html']).pipe(gulp.dest(p.dist));
});

gulp.task('build', ['clean'], function (done) {
  process.env.NODE_ENV = 'production';
  runSequence(['browserify', 'styles',  'image'],'copy-dist', done);
});

gulp.task('default', function() {
  console.log('Run "gulp watch or gulp build"');
});
