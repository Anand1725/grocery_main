const mongoose = require("mongoose");

const City = mongoose.model(
  "City",
  new mongoose.Schema({
    cityname: String,
    user: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role"
      }
    ]
  })
);

module.exports = City;