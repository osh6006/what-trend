// const { appUse } = require("./util/proxy");
const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  appUse(app, "/ranking", "https://waffleboard.io");
  appUse(app, "/top10/netflix/world/today/full", "https://flixpatrol.com");
  appUse(app, "/top10/disney/world/today/full", "https://flixpatrol.com");
  appUse(app, "/top10/amazon-prime/world/today/full", "https://flixpatrol.com");
  appUse(
    app,
    "/en/premier-league/table/2kwbbcootiqqgmrzs6o5inle5",
    "https://www.goal.com"
  );
  appUse(
    app,
    "/en/primera-división/table/34pl8szyvrbwcmfkuocjm3r6t",
    "https://www.goal.com"
  );
  appUse(app, "/en/serie-a/1r097lpxe0xn03ihb7wi98kao", "https://www.goal.com");
  appUse(
    app,
    "/en/bundesliga/6by3h89i2eykc341oz7lv1ddd",
    "https://www.goal.com"
  );
  appUse(app, "/en/ligue-1/dm5ka0os1e3dxcp3vh05kmp33", "https://www.goal.com");
};

function appUse(app, endpoint, target) {
  app.use(
    createProxyMiddleware(endpoint, {
      target,
      changeOrigin: true,
    })
  );
}
