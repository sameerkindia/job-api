const { StatusCodes } = require("http-status-codes");
const Job = require("../models/Job");

const getAllJob = async (req, res) => {
  res.send("get all job");
};
const getJob = async (req, res) => {
  res.send("get job");
};

const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;

  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};
const updateJob = async (req, res) => {
  res.send("job updated");
};
const deleteJob = async (req, res) => {
  res.send("job deleted");
};

module.exports = { getAllJob, getJob, updateJob, deleteJob, createJob };
