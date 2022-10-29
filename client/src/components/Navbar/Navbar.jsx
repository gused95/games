import { Link } from "react-router-dom";
import "./Navbar.css";
import HomeIcon from '@mui/icons-material/Home';

function Navbar() {
  return (
    <nav className="compStyle">
    
        <Link to='/'>
          <HomeIcon fontSize='large'/>
        </Link>
    
    </nav>
  );
}

export default Navbar;