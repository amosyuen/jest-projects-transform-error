const babelJest = require("babel-jest");

const transform = babelJest.createTransformer({
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

const oldGetCacheKey = transform.getCacheKey;
transform.getCacheKey = (...args) => 'web' + oldGetCacheKey(...args);

module.exports = transform;
