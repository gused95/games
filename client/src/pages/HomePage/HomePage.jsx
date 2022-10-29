import "./HomePage.css";
import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import MySection from "../../components/MySection/MySection";

const sectA = {
  title: 'All games',
  path: '/games',
  img: '/games2.jpg'
}

const sectB = {
  title: 'Create a game',
  path: '/games/add',
  img: '/games1.jpg'
}

function HomePage() {

  return (
    <div>
      <MySection {...sectA}/>
      <br />
      <MySection {...sectB}/>
      
        
    </div>
  );
}

export default HomePage;