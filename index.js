const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Hello Ecommerce API." });
});

require("./app/routes/cliente.routes.js")(app);
require("./app/routes/ecommerce.routes.js")(app);
require("./app/routes/produto.routes.js")(app);
require("./app/routes/pedido.routes.js")(app);

app.listen(4000, () => {
  console.log("Server is running on port 3000.");
});