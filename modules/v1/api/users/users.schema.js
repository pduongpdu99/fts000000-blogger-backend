const mongoosePaginate = require("mongoose-paginate-v2");
const mongoose = require('../../../../middleware/mongoose-connection.middleware');

const UserSchema = mongoose.Schema(
  {
    username: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    password: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    fullname: {
      type: mongoose.Schema.Types.String,
      required: true,
    },
    email: {
      type: mongoose.Schema.Types.String,
      required: function () {
        let email = this.email;
        return email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) != null;
      },
    },
    avatarImage: {
      type: mongoose.Schema.Types.String,
    },
    bioDescription: {
      type: mongoose.Schema.Types.String,
      max: 250,
    },
    birth: {
      type: mongoose.Schema.Types.Date,
    },
  },
  { timestamps: true }
);
UserSchema.plugin(mongoosePaginate);

module.exports = {
  UserSchema,
};
