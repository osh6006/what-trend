const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/ranking", {
      target: "https://waffleboard.io",
      changeOrigin: true,
    })
  );

  app.use(
    createProxyMiddleware("/top10/netflix/world/today/full", {
      target: "https://flixpatrol.com",
      changeOrigin: true,
    })
  );
};
