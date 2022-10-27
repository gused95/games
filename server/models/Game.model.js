const { Schema, model } = require("mongoose");

const gameSchema = new Schema(
    {
      name: {
        type: String,
        // unique: true -> Ideally, should be unique, but its up to you
      },
      description: {
        type: String,
      },
      
      developer: {
        type: String,
      },
      year: {
        type: Number,
      },
      consoles: {
        type: String,
      },
      imageUrl: {
        type: String,
      },
      active: {
        type: Boolean,
      },
    },
    {
      // this second object adds extra properties: `createdAt` and `updatedAt`
      timestamps: true,
    }
  );

const Game = model("Game", gameSchema);

module.exports = Game;