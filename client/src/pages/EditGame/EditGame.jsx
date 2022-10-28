import React from 'react'

import { useState, useEffect } from 'react';
import CollectionForm from '../../components/CollectionForm/CollectionForm';
import { useNavigate, useParams } from 'react-router-dom';
// import the service file since we need it to send/get the data to/from the server
import service from '../../api/service';

const EditGame = () => {

    const [imageUrl, setImageUrl] = useState("")

    const [form, setForm] = useState({
        name: '',
        description: '',
        active: '',
        year: '',
        consoles: '',
        developer: '',
    });

    const { 
        name, 
        description, 
        active, 
        year, 
        consoles,
        developer, 
    } = form;
    
    // Require useNavigate
    const navigate = useNavigate();
    const { id } = useParams();

    // Retrieve current Game ------------------------------
    
    // Run the effect after the initial render to get a list of games from the server
    useEffect(() => {
        service.getGame(id)
        .then((data) => {
            // console.log("data", data);
            setForm(data);
            setImageUrl(data.imageUrl)
        })
        .catch((err) => console.log(err));
    }, [id]); //  <-- This effect will run only once, after the initial render



    function handleInputChange(event) {
        const { name, value } = event.target
        return setForm({ ...form, [name]: value});
    };

    // -----------  handleFormSubmission ------------

    const handleFormSubmission = (event) => {
        event.preventDefault();
        
        // Wrapping the data
        const data = {
        name,
        description,
        active,
        year,
        consoles,
        developer,
        imageUrl}
        
        console.log(data)
        
        service
            .editGame(data, id) 
                .then((res) => {

                    // navigate to current DetailsGame
                    navigate(`/games/${id}`);
                })

                .catch((err) => 
                console.log("Error while editing the game: ", err))
    };

    // -----------  handleFormSubmission ------------

    // ******** this method handles the file upload ********
    const handleFileUpload = (e) => {
        // console.log("The file to be uploaded is: ", e.target.files[0]);

        const uploadData = new FormData();

        // imageUrl => this name has to be the same as in the model since we pass
        // req.body to .create() method when creating a new movie in '/api/movies' POST route
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

    // -----     options for developer   -------
    const optionsCollec = [
    {
        value: 'Venta',
        label: 'Vender',
    },
    {
        value: 'Intercambio',
        label: 'Intercambio',
    },
    {
        value: 'Donación',
        label: 'Donar',
    },
    
    ];
    // -----     options for developer   -------

    // -----     options for consoles   -------
    const options = [
    {
        value: 1,
        label: '1 semana',
    },
    {
        value: 2,
        label: '2 semanas',
    },
    {
        value: 3,
        label: '3 semanas',
    },
    {
        value: 4,
        label: '4 semanas',
    },
    
    ];
    // -----     options for consoles   -------

  return (
    <div>
        EditGame
         <CollectionForm 
            handleFormSubmission={handleFormSubmission}
            handleInputChange={handleInputChange}
            handleFileUpload={handleFileUpload}
            {...form}
            options1={optionsCollec}
            options2={options}
            imageUrl={imageUrl}
        />
    </div>
  )
}

export default EditGame