const env = require("./env");

module.exports = {
  presets: ["next/babel"],
  plugins: [
    ["styled-components", { ssr: true }],
    ["transform-define", env],
  ],
};
