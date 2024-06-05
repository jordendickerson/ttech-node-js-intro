const appGet = (req, res) => {
  res.send("Hello World!");
};

const awesomeMessage = (req, res) => {
  res.send("Tooele Tech is Awesome!");
};

module.exports = { appGet, awesomeMessage };
