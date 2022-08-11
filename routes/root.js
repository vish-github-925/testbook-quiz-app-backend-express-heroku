const {
  getPipesAndCisternsQuestions,
  getProbabilityQuestions,
  getProblemsOnAgesQuestions,
  getProfitsAndLossesQuestions,
} = require("../controllers/getRootControllers");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    "hit these end points: /probability, /pipesandcisterns, /problemsonages, /profitesandlosses"
  );
});
router.get("/probability", getProbabilityQuestions);
router.get("/pipesandcisterns", getPipesAndCisternsQuestions);
router.get("/problemsonages", getProblemsOnAgesQuestions);
router.get("/profitsandlosses", getProfitsAndLossesQuestions);

module.exports = router;
