const path = require("path");
const JsDocPlugin = require("jsdoc-webpack-plugin"); // jsdoc-webpack-plugin을 불러옵니다.

module.exports = {
  mode: "production",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
  plugins: [
    new JsDocPlugin({
      // 이 부분이 핵심
      conf: "jsdoc.config.json", // config 이름 추가
      cwd: ".", // config의 경로
      preserveTmpFile: false, // 임시 파일을 보존할 지 설정
    }),
  ],
};
