const router = require("express").Router();
const auth = require("../middleware/auth");
const ctrl = require("../controllers/bookController");

router.get("/", ctrl.getBooks);
router.get("/:id", ctrl.getBook);
router.post("/", auth, ctrl.createBook);
router.put("/:id", auth, ctrl.updateBook);
router.delete("/:id", auth, ctrl.deleteBook);

module.exports = router;
