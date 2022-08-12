const userService = require("./users.service");

/**
 * add controller
 * @param {*} req
 * @param {*} res
 */
const add = async (req, res) => {
  const body = req.body;

  res.send(await userService.add(body));
  res.end();
};

const get = async (req, res) => {
  const params = req.query;
  res.send(await userService.get(params));
  res.end();
};
const update = async (req, res) => {
  const body = req.body;

  res.send(await userService.update(body));
  res.end();
};
const remove = async (req, res) => {
  console.log(req);
  // const body = req;
  // res.send(await userService.remove(body.id));
  // res.end();
};
const findById = async (req, res) => {
  console.log(req);

  // const body = req.body;
  // res.send(await userService.findById(body.id));
  // res.end();
};
const paginate = async (req, res) => {
  const params = req.query;
  const limit = params.limit;
  const page = params.page;

  delete limit;
  delete page;

  res.send(await userService.paginate(page, limit, params));
  res.end();
};

module.exports = {
  add,
  get,
  update,
  remove,
  findById,
  paginate,
};
