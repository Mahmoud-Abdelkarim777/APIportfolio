const express = require("express");
const crypto = require("crypto");
const supabase = require("../config/supabase");
const verifyToken = require("../middleware/authMiddleware");

const router = express.Router();
const multer = require("multer");

const upload = multer({
  storage: multer.memoryStorage(),
});

router.get("/", verifyToken, async (req, res) => {
  const { data, error } = await supabase.from("projects").select("*");

  if (error) {
    return res.status(500).json({
      error: error.message,
    });
  }

  res.json(data);
});

router.post("/", verifyToken, upload.single("image"), async (req, res) => {
  if (!req.file) {
    return res.status(400).json({
      error: "Image is required",
    });
  }
  const fileName = `${Date.now()}-${crypto.randomUUID()}.png`;

  const { error: uploadError } = await supabase.storage
    .from("project-images")
    .upload(fileName, req.file.buffer, {
      contentType: req.file.mimetype,
    });
  if (uploadError) {
    return res.status(500).json({
      error: uploadError.message,
    });
  }

  const { data: publicUrlData } = supabase.storage
    .from("project-images")
    .getPublicUrl(fileName);

  const { title, description, githubUrl, liveUrl, technologies } = req.body;

  const { data, error } = await supabase
    .from("projects")
    .insert([
      {
        title,
        description,
        image: publicUrlData.publicUrl,
        githubUrl,
        liveUrl,
        technologies,
      },
    ])
    .select();

  if (error) {
    return res.status(500).json({
      error: error.message,
    });
  }

  res.status(201).json(data[0]);
});

router.delete("/:id", verifyToken, async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase.from("projects").delete().eq("id", id);

  if (error) {
    return res.status(500).json({
      error: error.message,
    });
  }

  res.json({
    message: "Project deleted successfully",
  });
});

router.put("/:id", verifyToken, upload.single("image"), async (req, res) => {
  const { id } = req.params;
  const { data: oldProject, error: fetchError } = await supabase
    .from("projects")
    .select("*")
    .eq("id", id)
    .single();

  if (fetchError) {
    return res.status(404).json({
      error: "Project not found",
    });
  }
  let imageUrl = oldProject.image;
  if (req.file) {
    const fileName = `${Date.now()}-${crypto.randomUUID()}.png`;

    const { error: uploadError } = await supabase.storage
      .from("project-images")
      .upload(fileName, req.file.buffer, {
        contentType: req.file.mimetype,
      });

    if (uploadError) {
      return res.status(500).json({
        error: uploadError.message,
      });
    }

    const { data: publicUrlData } = supabase.storage
      .from("project-images")
      .getPublicUrl(fileName);

    imageUrl = publicUrlData.publicUrl;
  }
  const { title, description, githubUrl, liveUrl, technologies } = req.body;

  const { data, error } = await supabase
    .from("projects")
    .update({
      title,
      description,
      image: imageUrl,
      githubUrl,
      liveUrl,
      technologies,
    })
    .eq("id", id)
    .select();

  if (error) {
    return res.status(500).json({
      error: error.message,
    });
  }

  res.json(data[0]);
});

module.exports = router;
