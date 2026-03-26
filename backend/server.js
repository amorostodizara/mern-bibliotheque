// server.js
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const connectDB = require("./config/database");
const bookRoutes = require("./routes/books");
const userRoutes = require("./routes/users");
const reviewRoutes = require("./routes/reviews");
const readingListRoutes = require("./routes/readingLists");

const app = express();

// Middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
// Routes
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/reading-lists", readingListRoutes);

// Route de test
app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "Le serveur fonctionne",
    mongodb: mongoose.connection.readyState === 1 ? "connecté" : "déconnecté",
  });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Une erreur est survenue" });
});

// Connexion à MongoDB et démarrage
const PORT = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`\nPort ${PORT}`);
      console.log(`Health check: http://localhost:${PORT}/api/health\n`);
    });
  })
  .catch((error) => {
    console.error("Échec du démarrage:", error);
    process.exit(1);
  });
