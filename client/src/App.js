import './App.css';
import Navbar from "./components/Navbar/Navbar";

import HomePage from "./pages/HomePage/HomePage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

import { Routes, Route, Link } from "react-router-dom";
import AllGames from './pages/AllGames/AllGames';
import AddNewGame from './pages/AddNewGame/AddNewGame';

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>
        <Route  path="/" element={<AllGames />} />

        <Route path="/games/add" element={<AddNewGame />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>      
    </div>
  );
}

export default App;
