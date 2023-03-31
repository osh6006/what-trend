const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  appUse(app, "/ranking", "https://waffleboard.io");
  appUse(app, "/top10", "https://flixpatrol.com");
  appUse(app, "/title", "https://flixpatrol.com");
  appUse(app, "/en", "https://www.goal.com");
  appUse(app, "/competition/rankings/", "https://www.besoccer.com");
  appUse(app, "/player", "https://www.besoccer.com");
  appUse(app, "/v1", "https://openapi.naver.com");
};

function appUse(app, endpoint, target) {
  app.use(
    createProxyMiddleware(endpoint, {
      target,
      changeOrigin: true,
    })
  );
}
