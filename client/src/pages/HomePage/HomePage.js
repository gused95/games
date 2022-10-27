import "./HomePage.css";
import { useState, useEffect } from "react";
import service from "../../api/service";


function HomePage() {
  
  const [games, setGames] = useState([]);
 
  // Run the effect after the initial render to get a list of games from the server
  useEffect(() => {
    service.getGames()
      .then((data) => {
        // console.log("data", data);
        setGames(data);
      })
      .catch((err) => console.log(err));
  }, []); //  <-- This effect will run only once, after the initial render

  return (
    <div>
      <h2>Games</h2>
      {games &&
        games.map((game) => (
          <div key={game._id}>
            <p>{game.name}</p>
            <img src={game.imageUrl} alt="game" width="200" />
            <p>{game.description}</p>
          </div>
        ))}
    </div>
  );
}

export default HomePage;