const mongoose = require("mongoose");

const readingListSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true,
    default: "Ma liste de lecture",
  },
  books: [
    {
      book: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Book",
      },
      addedAt: {
        type: Date,
        default: Date.now,
      },
      status: {
        type: String,
        enum: ["À lire", "En cours", "Terminé", "Abandonné"],
        default: "À lire",
      },
      currentPage: {
        type: Number,
        default: 0,
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("ReadingList", readingListSchema);
