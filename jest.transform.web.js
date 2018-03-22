const babelJest = require("babel-jest");

module.exports = babelJest.createTransformer({
  babelrc: false,
  presets: [
    [
      "env",
      {
        targets: {
          browsers: ["defaults"]
        }
      }
    ],
    "react"
  ],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "react-native": "react-native-web"
        }
      }
    ]
  ],
  env: {
    development: {
      plugins: ["transform-react-jsx-source"]
    }
  }
});
