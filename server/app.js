const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const sequelize = require("./config/db");

dotenv.config();

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 8000;
sequelize.sync({ alter: true }) // Use { force: true } for full rebuild during development
  .then(() => {
    console.log("Database tables synchronized.");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error("Error synchronizing database tables:", err);
  });
