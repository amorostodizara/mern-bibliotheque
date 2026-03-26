const Review = require("../models/Review");

// Ajouter avis
exports.addReview = async (req, res) => {
  const review = await Review.create({
    user: req.user.id,
    book: req.body.book,
    rating: req.body.rating,
    comment: req.body.comment,
  });

  res.json(review);
};

// Voir avis d’un livre
exports.getReviewsByBook = async (req, res) => {
  const reviews = await Review.find({ book: req.params.bookId }).populate(
    "user",
    "username",
  );

  res.json(reviews);
};
