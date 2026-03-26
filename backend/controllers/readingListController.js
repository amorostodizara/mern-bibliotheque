const ReadingList = require("../models/ReadingList");

// Créer liste
exports.createList = async (req, res) => {
  const list = await ReadingList.create({
    user: req.user.id,
    name: req.body.name,
  });

  res.json(list);
};

// Ajouter livre
exports.addBookToList = async (req, res) => {
  const list = await ReadingList.findById(req.params.id);

  list.books.push({ book: req.body.book });

  await list.save();
  res.json(list);
};
