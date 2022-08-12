const { default: mongoose } = require("mongoose");
const { UserSchema } = require("./users.schema");

// declare model
const userModel = mongoose.model("User", UserSchema);

// =======================================================
// Create - Read - Update - Delete - Find by Id - Paginate
// =======================================================

/**
 * add method
 * @param {*} params
 * @returns
 */
const add = async (params) => {
  try {
    return await userModel.add(params);
  } catch (err) {
    throw err;
  }
};

/**
 * get method
 * @param {*} params
 * @returns
 */
const get = async (params) => {
  try {
    const usersProjection = {
      __v: false,
    };

    return await userModel.find({ ...params }, usersProjection);
  } catch (err) {
    throw err;
  }
};

/**
 * update model by id
 * @param {*} params
 */
const update = async (params) => {
  // default id
  try {
    const id = params.id;
    delete id;

    return await userModel.findByIdAndUpdate(id, params);
  } catch (err) {
    throw err;
  }
};

/**
 * remove model by id
 * @param {String} id
 */
const remove = async (id) => {
  // default id
  try {
    return await userModel.findByIdAndDelete(id);
  } catch (err) {
    throw err;
  }
};

/**
 * find by id method
 * @param {String} id
 * @returns
 */
const findById = async (id) => {
  // default id
  try {
    const id = params.id;
    delete id;
    return await userModel.findById(id);
  } catch (err) {
    throw err;
  }
};

/**
 * paginate method
 * @param {Number} page
 * @param {Number} limit
 * @param {*} query
 */
const paginate = async (page, limit, query) => {
  // default id
  try {
    const options = {
      page: page,
      limit: limit,
    };

    return await userModel.paginate(query, options);
  } catch (err) {
    throw err;
  }
};

module.exports = {
  add,
  get,
  update,
  remove,
  findById,
  paginate,
};
