const express = require("express");

const router = express.Router();

const {
  getAllJob,
  getJob,
  deleteJob,
  createJob,
  updateJob,
} = require("../controllers/jobs");

router.route("/").get(getAllJob).post(createJob);
router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);

module.exports = router;
