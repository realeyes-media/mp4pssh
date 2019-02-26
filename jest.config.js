module.exports = {
  moduleFileExtensions: ["ts", "js", "json", "node"],
  roots: ["<rootDir>/src"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts$",
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
};
