const mongoose = require("mongoose");
const servicesSchema = new mongoose.Schema(
  {
    serviceId: {
      type: String,
      required: true,
    },
    serviceName: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
      default: "enabled",
    },
  },
  {
    timestamps: true,
  }
);

const servicesModel = mongoose.model("services", servicesSchema);
module.exports = servicesModel;