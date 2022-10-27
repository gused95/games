const { Schema, model } = require("mongoose");

const developerSchema = new Schema(
    {
      name: {
        type: String,
        // unique: true -> Ideally, should be unique, but its up to you
      },
    },
    {
      // this second object adds extra properties: `createdAt` and `updatedAt`
      timestamps: true,
    }
  );

const Developer = model("Developer", developerSchema);

module.exports = Developer;