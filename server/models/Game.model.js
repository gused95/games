const { Schema, model } = require("mongoose");

const gameSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
      },
      description: {
        type: String, //TODO: maxlength
        required: true,
      },
      
      developer: {
        type: String,
        required: true,
      },
      year: {
        type: Number,
        required: true,
      },
      consoles: {
        type: String,
        required: true
      },
      
      // [{ type: Schema.Types.ObjectId, ref: "Console" }],

      imageUrl: {
        type: String,
        required: true,
      },
      active: {
        type: Boolean,
        required: true,
      },
    },
    {
      // this second object adds extra properties: `createdAt` and `updatedAt`
      timestamps: true,
    }
  );

const Game = model("Game", gameSchema);

module.exports = Game;