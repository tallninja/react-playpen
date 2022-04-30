const express = require("express");
const cors = require("cors");

class App {
  constructor(port) {
    this.port = port;
    this.app = express();
    this.routes = require("./routes");
  }

  setup() {
    this.app.use(cors());
  }

  run() {
    this.setup();
    this.app.use("/", this.routes);

    const PORT = process.env.PORT || this.port;
    this.app.listen(PORT, (err) => {
      if (err) {
        console.error("Failed to start server !", err);
      } else {
        console.log(`Server listening on PORT: ${PORT}`);
      }
    });
  }
}

module.exports = App;
