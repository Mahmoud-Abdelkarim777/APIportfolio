const express = require("express");
const { login } = require("../controllers/authController");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", login);
router.get("/me", verifyToken, (req, res) => {
  res.json({
    admin: req.admin,
  });
});
router.post("/logout", (req, res) => {
  res.clearCookie("token");

  res.json({
    message: "Logout successful",
  });
});

module.exports = router;