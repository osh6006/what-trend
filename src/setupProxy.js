// const { appUse } = require("./util/proxy");
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  appUse(app, "/ranking", "https://waffleboard.io");
  appUse(app, "/top10/netflix/world/today/full", "https://flixpatrol.com");
  appUse(app, "/top10/disney/world/today/full", "https://flixpatrol.com");
  appUse(app, "/top10/amazon-prime/world/today/full", "https://flixpatrol.com");
};

function appUse(app, endpoint, target) {
  app.use(
    createProxyMiddleware(endpoint, {
      target,
      changeOrigin: true,
    })
  );
}
