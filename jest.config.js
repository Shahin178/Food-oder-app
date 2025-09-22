// module.exports = {
//   testEnvironment: "jsdom",
//   transform: {
//     "^.+\\.[jt]sx?$": "babel-jest",
//   },
//   moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
//   setupFilesAfterEnv: ["@testing-library/jest-dom"],
// };

export default {
  testEnvironment: "jsdom", // For React
  transform: {
    "^.+\\.[jt]sx?$": "babel-jest", // Transform JS/JSX with Babel
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  setupFilesAfterEnv: ["@testing-library/jest-dom", "<rootDir>/jest.setup.js"],
};
