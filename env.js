const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.version": "1.0.0",
  "process.env.production": prod,
  "process.env.development": !prod,
};
