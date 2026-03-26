// config/database.js
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("Connexion à MongoDB...");
    console.log(
      "URI utilisée:",
      process.env.MONGODB_URI?.replace(/\/\/[^@]+@/, "//****:****@"),
    );

    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI non défini dans .env");
    }

    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`MongoDB connecté: ${conn.connection.host}`);
    console.log(`Base de données: ${conn.connection.db.databaseName}`);
  } catch (error) {
    console.error("❌ Erreur de connexion MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
