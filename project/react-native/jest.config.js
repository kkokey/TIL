// jest.config.js
module.exports = {
  preset: "react-native",
  transform: {
    "^.+\\.jsx?$": "<rootDir>/node_modules/babel-jest"
  },
  transformIgnorePatterns: [
    "/node_modules/(?!react-native)/.+"
  ],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"]
};
