module.exports = {
  preset: "solid-jest/preset/browser",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
  transform: {
    ".+\\.(css)$": "jest-css-modules-transform",
  },
  collectCoverageFrom: ["<rootDir>/src/**/*.{js,jsx}"],
};
