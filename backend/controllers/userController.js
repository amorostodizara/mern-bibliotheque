const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ error: "Tous les champs sont requis" });
  }

  // Vérifier si username ou email existent déjà
  const existingUser = await User.findOne({ $or: [{ username }, { email }] });
  if (existingUser) {
    return res
      .status(400)
      .json({ error: "Nom d'utilisateur ou email déjà utilisé" });
  }

  const hash = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    email,
    password: hash,
  });

  res.json(user);
};

// LOGIN
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email et mot de passe requis" });
  }

  // Cherche l'utilisateur par email
  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ error: "Utilisateur non trouvé" });

  // Vérifie le mot de passe
  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ error: "Mot de passe incorrect" });

  // Génère le token JWT
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "1h", // optionnel, durée de validité
  });

  res.json({
    token,
    user: {
      id: user._id,
      username: user.username,
      email: user.email,
    },
  });
};

// FAVORIS
exports.addFavorite = async (req, res) => {
  const user = await User.findById(req.user.id);
  user.favorites.push(req.params.bookId);
  await user.save();
  res.json(user);
};
