const os = require("os");
const path = require("path");

const nativeConfig = {
  displayName: "native",
  preset: "jest-expo",
  cacheDirectory: path.join(os.tmpdir(), `jest-native`),
  testMatch: ['**/*.test.native.js']
};
const webConfig = {
  displayName: "web",
  cacheDirectory: path.join(os.tmpdir(), `jest-web`),
  transform: {
    "^.+\\.js$": path.resolve(__dirname, "jest.transform.web.js")
  },
  setupFiles: ["jest-canvas-mock"],
  testMatch: ['**/*.test.web.js']
};

module.exports = {
  projects: [nativeConfig, webConfig]
};
