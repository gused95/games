import React from 'react'

import { useState } from 'react';
import CollectionForm from '../../components/CollectionForm/CollectionForm';
import { useNavigate } from 'react-router-dom';
// import the service file since we need it to send/get the data to/from the server
import service from '../../api/service';

const AddNewGame = () => {

    const [imageUrl, setImageUrl] = useState("")

    const [errStatus, setErrStatus] = useState(false)

    const [errMsg, setErrMsg] = useState('')

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
        
        // Validate description length 
        if (description.length > 300) {
            setErrStatus(true)
            return 
        }

        // Wrapping the data
        const data = {
        name,
        description,
        active,
        year,
        consoles,
        developer,
        imageUrl,}
        console.log(data)

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

                    // navigate to AllGames
                    navigate("/games");

                })
                .catch((err) => {
                    const { errorMessage } = err.response.data
                    setErrMsg(`Error while adding the new game: ${errorMessage}`)
                })
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
    const optDev = [
    {
        value: 'Activision',
        label: 'Activision',
    },
    {
        value: 'Bungie',
        label: 'Bungie',
    },
    {
        value: 'Naugthy Dog',
        label: 'Naugthy Dog',
    },
    
    ];
    // -----     options for developer   -------

    // -----     options for consoles   -------
    const optCons = [
    {
        value: 'Playstation',
        label: 'Playstation',
    },
    {
        value: 'X-BOX',
        label: 'X-BOX',
    },
    {
        value: 'Nintendo',
        label: 'Nintendo',
    },
    
    ];
    // -----     options for consoles   -------

    // -----     options for active   -------
    const optActive = [
        {
            value: true,
            label: 'Active',
        },
        {
            value: false,
            label: 'No Active',
        },
        ];
    // -----     options for active   -------

  return (
    <CollectionForm 
      handleFormSubmission={handleFormSubmission}
      handleInputChange={handleInputChange}
      handleFileUpload={handleFileUpload}
      {...form}
      optDev={optDev}
      optCons={optCons}
      imageUrl={imageUrl}
      errStatus={errStatus}
      optActive={optActive}
      errMsg={errMsg}
    />
  )
}

export default AddNewGame