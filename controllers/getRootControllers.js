const {
  PROBABILITY,
  PIPES_AND_CISTERNS,
  PROBLEMS_ON_AGES,
  PROFITS_AND_LOSSES,
} = require("../config/db.js");

const getProbabilityQuestions = (req, res) => {
  res.status(200).json(PROBABILITY);
};
const getPipesAndCisternsQuestions = (req, res) => {
  res.status(200).json(PIPES_AND_CISTERNS);
};
const getProblemsOnAgesQuestions = (req, res) => {
  res.status(200).json(PROBLEMS_ON_AGES);
};
const getProfitsAndLossesQuestions = (req, res) => {
  res.status(200).json(PROFITS_AND_LOSSES);
};
module.exports = {
  getPipesAndCisternsQuestions,
  getProbabilityQuestions,
  getProblemsOnAgesQuestions,
  getProfitsAndLossesQuestions,
};
