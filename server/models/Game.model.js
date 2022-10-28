const { Schema, model } = require("mongoose");

const gameSchema = new Schema(
    {
      name: {
        type: String,
        required: true,
        // unique: true -> Ideally, should be unique, but its up to you
      },
      description: {
        type: String,
        required: true,
        maxlength: 300,
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
        required: true,
      },
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