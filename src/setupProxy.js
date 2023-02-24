const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/ranking", {
      target: "https://waffleboard.io",
      changeOrigin: true,
    })
  );
};
