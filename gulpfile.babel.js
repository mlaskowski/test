import gulp from 'gulp';
import http from 'http';
import connect from 'connect';
import serveStatic from 'serve-static';
import selenium from 'selenium-standalone';
import webdriver from 'gulp-webdriver';

let httpServer, seleniumServer;

gulp.task('http', (done) => {
  let app = connect().use(serveStatic('test/fixtures'));
  httpServer = http.createServer(app).listen(8080, done);
});

gulp.task('selenium', (done) => {
  selenium.install({logger: console.log}, () => {
    selenium.start((err, child) => {
      if (err) { return done(err); }
      seleniumServer = child;
      done();
    });
  });
});

gulp.task('e2e', ['http', 'selenium'], () => {
  return gulp.src('wdio.conf.js')
    .pipe(webdriver()).on('error', () => {
      seleniumServer.kill();
      process.exit(1);
    });;
});

gulp.task('test', ['e2e'], () => {
  httpServer.close();
  seleniumServer.kill();
});
