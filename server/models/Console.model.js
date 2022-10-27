const { Schema, model } = require("mongoose");

const consoleSchema = new Schema(
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

const Console = model("Console", consoleSchema);

module.exports = Console;