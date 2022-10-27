// pages/AddMovie/AddMovie.js

import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import the service file since we need it to send/get the data to/from the server
import service from "../../api/service";

function AddGame (){
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [developer, setDeveloper] = useState("");
  const [year, setYear] = useState("");
  const [consoles, setConsoles] = useState("");
  const [active, setActive] = useState("");
  

  const navigate = useNavigate();
  
  // ******** this method handles the file upload ********
  const handleFileUpload = (e) => {
    // console.log("The file to be uploaded is: ", e.target.files[0]);

    const uploadData = new FormData();

    // imageUrl => this name has to be the same as in the model since we pass
    // req.body to .create() method when creating a new game in '/api/games' POST route
    uploadData.append("imageUrl", e.target.files[0]);

    service
      .uploadImage(uploadData)
      .then(response => {
        // console.log("response is: ", response);
        // response carries "fileUrl" which we can use to update the state
        setImageUrl(response.fileUrl);
      })
      .catch(err => console.log("Error while uploading the file: ", err));
  };

  // ********  this method submits the form ********
  const handleSubmit = (e) => {
    e.preventDefault();

    service
      .createGame({ name, description, imageUrl, developer, year, consoles, active })
      .then(res => {
        // console.log("added new game: ", res);

        // Reset the form
        setName("");
        setDescription("");
        setImageUrl("");
        setDeveloper("");
        setYear("");
        setConsoles("");
        setActive("");
      
        // navigate to another page
        navigate("/");
      })
      .catch(err => console.log("Error while adding the new game: ", err));
  };

  return (
    <div>
      <h2>New Game</h2>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input 
          type="text" 
          name="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)}
        />

        <label>Description</label>
        <textarea 
          type="text"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)} 
        />

        <label>Developer</label>
        <textarea 
          type="text"
          name="developer"
          value={developer}
          onChange={(e) => setDeveloper(e.target.value)} 
        />

        <label>Year</label>
        <textarea 
          type="number"
          name="year"
          value={year}
          onChange={(e) => setYear(e.target.value)} 
        />

        <label>Consoles</label>
        <textarea 
          type="text"
          name="consoles"
          value={consoles}
          onChange={(e) => setConsoles(e.target.value)} 
        />

        <label>Active</label>
        <textarea 
          type="boolean"
          name="active"
          value={active}
          onChange={(e) => setActive(e.target.value)} 
        />

        <input type="file" onChange={(e) => handleFileUpload(e)} />

        <button type="submit">Save new game</button>
      </form>
    </div>
  );
}

export default AddGame;
