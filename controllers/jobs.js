const getAllJob = async (req, res) => {
  res.send("get all job");
};
const getJob = async (req, res) => {
  res.send("get job");
};
const createJob = async (req, res) => {
  res.send("job created");
};
const updateJob = async (req, res) => {
  res.send("job updated");
};
const deleteJob = async (req, res) => {
  res.send("job deleted");
};

module.exports = { getAllJob, getJob, updateJob, deleteJob, createJob };
