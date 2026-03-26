const router = require("express").Router();
const auth = require("../middleware/auth");
const ctrl = require("../controllers/reviewController");

router.post("/", auth, ctrl.addReview);
router.get("/:bookId", ctrl.getReviewsByBook);

module.exports = router;
