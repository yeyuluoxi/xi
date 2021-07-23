const {createProxyMiddleware} = require("http-proxy-middleware");

module.exports = function (app){
  app.use("/yu",
    createProxyMiddleware({
      target: 'http://www.yeyuluoxi.cn',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/yu": "/"
      }
    })
  );
  app.use("/local",
    createProxyMiddleware({
      target: 'http://127.0.0.1:80',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/local": "/"
      }
    })
  );
};