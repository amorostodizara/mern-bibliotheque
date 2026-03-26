const Book = require("../models/Book");

// GET ALL
exports.getBooks = async (req, res) => {
  const search = req.query.search;

  let books;
  if (search) {
    books = await Book.find({ $text: { $search: search } });
  } else {
    books = await Book.find();
  }

  res.json(books);
};

// GET ONE
exports.getBook = async (req, res) => {
  res.json(await Book.findById(req.params.id));
};

// CREATE
exports.createBook = async (req, res) => {
  res.json(await Book.create(req.body));
};

// UPDATE
exports.updateBook = async (req, res) => {
  res.json(
    await Book.findByIdAndUpdate(req.params.id, req.body, { new: true }),
  );
};

// DELETE
exports.deleteBook = async (req, res) => {
  res.json(await Book.findByIdAndDelete(req.params.id));
};
