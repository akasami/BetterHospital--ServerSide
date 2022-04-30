const mongoose = require("mongoose");
const { required } = require("nodemon/lib/config");
let RadiologySchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    patientid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "patients",
      required: true,
    },
    charges: { type: Number }, // must be calculated from the server.
    radiology_type: { type: String, required: true },
    dated: { type: Date, required: true },
  },
  { versionKey: false }
);
module.exports = mongoose.model("radiology", RadiologySchema);
