const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
    enum: [
      "Roman",
      "Science-Fiction",
      "Philosophie",
      "Fantasy",
      "Poésie",
      "Thriller",
      "Développement personnel",
    ],
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
    default: 0,
  },
  coverImage: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  publicationYear: {
    type: Number,
  },
  pageCount: {
    type: Number,
  },
  isbn: {
    type: String,
    unique: true,
    sparse: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

bookSchema.index({ title: "text", author: "text", description: "text" });

module.exports = mongoose.model("Book", bookSchema);
