const { Schema, model } = require("mongoose");

const consoleSchema = new Schema(
    {
      name: {
        type: String,
        enum: ['Activision', 'Bungie', 'Naughty Dog']
      },
      game: { type: Schema.Types.ObjectId, ref: "Game" }
    },
    {
      // this second object adds extra properties: `createdAt` and `updatedAt`
      timestamps: true,
    }
  );

const Console = model("Console", consoleSchema);

module.exports = Console;