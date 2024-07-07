const express = require("express");
const authRoutes = require("./routes/auth.route");
const orgRoutes = require("./routes/org.route");

const app = express();
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/organisation", orgRoutes);

app.get("/status", (req, res) => {
  res.status(201).json({
    message: "Up and Running",
  });
});

module.exports = app;
