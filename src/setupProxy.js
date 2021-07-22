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
      target: 'http://192.168.1.27:9100',
      secure: false,
      changeOrigin: true,
      pathRewrite: {
        "^/local": "/"
      }
    })
  );
};