module.exports = {
  preset: "solid-jest/preset/browser",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
  transform: {
    ".+\\.(css)$": "jest-css-modules-transform",
  },
};
