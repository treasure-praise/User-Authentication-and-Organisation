const app = require("./index");
const dotenv = require("dotenv");

dotenv.config();
const port = process.env.PORT || 3000;

const server = app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

module.exports = server;
