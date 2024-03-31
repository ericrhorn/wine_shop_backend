const mongoose = require("mongoose");

const wineSchema = new mongoose.Schema(
  {
    wineName: {
      type: String,
      required: [true, "A wine name is required"],
      // minlength: [3, "Wine name must be more than 3 characters"],
    },
    wineType: {
      type: String,
      required: [true, "A wine type is required"],
      // minlength: [3, "wine type must be more than 3 characters"],
    },
    wineDescription: {
      type: String,
      required: [true, "A wine description is required"],
      // minlength: [3, "Pet description must be more than 3 characters"],
    },
    // wineImage: {
    //   type: Image,
    // },

  },
  { timestamps: true }
);

const Wine = mongoose.model("Wine", wineSchema);

module.exports = Wine;
