export const server = (done) => {
  app.plugins.php.server({
    base: `${app.path.build.php}`,
    port: 3000,
    keepalive: true,
    index: '/index.php',
    function() {
      app.plugins.browsersync.init({
        proxy: "localhost:3000",
        baseDir: `${app.path.build.php}`,
        notify: false,
      });
    }
  });
};