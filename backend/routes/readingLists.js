const router = require("express").Router();
const auth = require("../middleware/auth");
const ctrl = require("../controllers/readingListController");

router.post("/", auth, ctrl.createList);
router.post("/:id/books", auth, ctrl.addBookToList);

module.exports = router;
