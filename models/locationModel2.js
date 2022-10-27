const mongoose = require("mongoose");
const locationSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    locationName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    website: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    costperwash: {
      type: Number,
      required: true,
    },
    timings : {
      type: Array,
      required: true,
    },
    service1 : {
      type: String,
      required: false,
    },
    service2 : {
      type: String,
      required: false,
    },
    service3 : {
      type: String,
      required: false,
    },
    status: {
      type: String,
      default: "pending",
    }
  },
  {
    timestamps: true,
  }
);

const locationModel = mongoose.model("location1", locationSchema);
module.exports = locationModel;
