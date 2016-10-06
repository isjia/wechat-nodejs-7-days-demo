var gulp = require('gulp');
var markdown = require('gulp-markdown');
var browserSync = require('browser-sync').create();
var wrap = require('gulp-wrap');

gulp.task('markdown', function(){
  return gulp.src('./src/notes/*.md')
    .pipe(markdown())
    .pipe(wrap({ src: 'src/layout/default-notes.html'}))
    .pipe(gulp.dest('_site'));
});

gulp.task('cp-github-md-css', function(){
  gulp.src('node_modules/github-markdown-css/github-markdown.css')
      .pipe(gulp.dest('_site/style'));
});

gulp.task('serve', ['markdown', 'cp-github-md-css'], function(){
  browserSync.init({
    server: {
      baseDir: './_site'
    }
  });

  gulp.watch('./src/notes/*.md', ['markdown']);
  gulp.watch(['_site/*.html']).on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
