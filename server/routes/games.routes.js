// Require express
const router = require("express").Router()

// Require mongoose
const mongoose = require("mongoose");

// Require Model
const Game = require('../models/Game.model')
// const Console = require('../models/Console.model')

// ********* require fileUploader in order to use it *********
const fileUploader = require("../config/cloudinary.config");

//router.methodHTTP(path, ()  => {})

// GET "http://localhost:5005/api/games" => Route to list all available games
router.get("/games", (req, res, next) => {
    Game.find()
      .then(gamesFromDB => res.status(200).json(gamesFromDB))
      .catch(err => next(err));
  });

// GET "http://localhost:5005/api/games/:id" => Route to get a specific game
router.get("/games/:id", (req, res, next) => {
    
    const {id} = req.params;

    Game.findById(id)
      .then(gameFromDB => res.status(200).json(gameFromDB))
      .catch(err => next(err));
  });


// DELETE "http://localhost:5005/api/games/:id" => Route to delete a game
router.delete("/games/:id", (req, res, next) => {
    
    const {id} = req.params;

    Game.findByIdAndDelete(id)
      .then(gameFromDB => res.status(200).json(gameFromDB))
      .catch(err => next(err));
  });

// PUT "http://localhost:5005/api/games/edit/:id" => Route to edit a game
router.put("/games/edit/:id", (req, res, next) => {
    
    const {id} = req.params;

    Game.findByIdAndUpdate(id, req.body, { new:true })
      .then(gameUpdated => res.status(200).json(gameUpdated))
      .catch(err => next(err));
  });


// POST "/api/upload" => Route that receives the image, sends it to Cloudinary via the fileUploader and returns the image URL
router.post("/upload", fileUploader.single("imageUrl"), (req, res, next) => {
    // console.log("file is: ", req.file)
   
    if (!req.file) {
      next(new Error("No file uploaded!"));
      return;
    }
    
    // Get the URL of the uploaded file and send it as a response.
    // 'fileUrl' can be any name, just make sure you remember to use the same when accessing it on the frontend
    
    res.json({ fileUrl: req.file.path });
  });


// POST 'http://localhost:5005/api/games' => for saving a new movie in the database
router.post("/games", (req,res) => {
console.log(req.body)
    const {
        name,
        description,
        developer,
        consoles,
        imageUrl,
        year,
        active } = req.body;

    if (!name || 
        !description || 
        !developer || 
        !consoles || 
        !imageUrl || 
        !year
        ) {
        return res
          .status(400)
          .json({ errorMessage: "All the fields are mandatory" });
        }

    Game.create(
        {
            name,
            description,
            developer,
            consoles,
            imageUrl,
            active,
            year,
        }
    )

        .then(() => {
            res.status(200).json({ message: 'Game created successfully !' });
        })

        .catch((err) => {
            console.log(err)
            res.status(500).json({ errorMessage: err.message })
        })
    
})


module.exports = router