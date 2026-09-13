const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const supabase = require("../config/supabase");

const login = async (req, res) => {
  const { username, password } = req.body;

  const { data: admin, error } = await supabase
    .from("admins")
    .select("*")
    .eq("username", username)
    .single();

  if (error || !admin) {
    return res.status(401).json({
      message: "Invalid username or password",
    });
  }
  const isPasswordValid = await bcrypt.compare(password, admin.password);
  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid username or password",
    });
  }
  const token = jwt.sign(
    { id: admin.id, username: admin.username },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );
  return res
    .cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      maxAge: 24 * 60 * 60 * 1000,
    })
    .json({
      message: "Login successful",
    });
};
module.exports = {
  login,
};
