const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("home");
});

router.get("/personal_details", (req, res) => {
  res.render("personal_details");
});
router.get("/hard_skills", (req, res) => {
  res.render("hard_skills");
});
router.get("/soft_skills", (req, res) => {
  res.render("soft_skills");
});
router.get("/summary", (req, res) => {
  res.render("summary");
});
router.get("/experience", (req, res) => {
  res.render("experience");
});
router.get("/projects", (req, res) => {
  res.render("projects");
});
router.get("/education", (req, res) => {
  res.render("education");
});
router.get("/resume", (req, res) => {
  res.render("resume");
});

module.exports = router;
