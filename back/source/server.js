const express = require("express");
const listingRoutes = require("./listings/routes");
const authRoutes = require("./auth/routes");
const otherRoutes = require("./other/routes");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.use("/api/v1/listings", listingRoutes);
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/", otherRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
