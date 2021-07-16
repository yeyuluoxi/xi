const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app){
  app.use("/line",
    createProxyMiddleware("/line", {
      target: 'http://www.cninct.com',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/line": "/"
      }
    })
  );
};