let config = {
  host: "eh",
  protocol: "huh",
  port: "uh",
};
console.log(config);
// Object.freeze(config);
// config.host = "what";
// console.log(config);

Object.seal(config);
config.host = "what";
console.log(config);
