const router = require("express").Router();
const auth = require("../middleware/auth");
const ctrl = require("../controllers/userController");

router.post("/register", ctrl.register);
router.post("/login", ctrl.login);
router.post("/favorites/:bookId", auth, ctrl.addFavorite);

module.exports = router;
