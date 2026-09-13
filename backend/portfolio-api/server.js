require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const projectsRouter = require("./routes/projects");
const authRouter = require("./routes/auth");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/api/projects", projectsRouter);
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.send("Portfolio API is running 🚀");
});

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV !== "production") {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;