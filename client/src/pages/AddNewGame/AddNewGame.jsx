import React from 'react'

import { useState } from 'react';
import CollectionForm from '../../components/CollectionForm/CollectionForm';
import { useNavigate } from 'react-router-dom';
// import the service file since we need it to send/get the data to/from the server
import service from '../../api/service';

const AddNewGame = () => {

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
        imageUrl,}
        
        
        service
            .createGame(data) 
                .then((res) => {
                // console.log("added new game: ", res);

                // Reset the form
                setForm({
                name: '',
                description: '',
                active: '',
                year: '',
                consoles: '',
                developer: '',
                });
                
                setImageUrl("")

                // navigate to another page
                navigate("/myCollection");

            })
            .catch((err) => console.log("Error while adding the new game: ", err))
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
    <CollectionForm 
      handleFormSubmission={handleFormSubmission}
      handleInputChange={handleInputChange}
      handleFileUpload={handleFileUpload}
      {...form}
      options1={optionsCollec}
      options2={options}
      imageUrl={imageUrl}
    />
  )
}

export default AddNewGame