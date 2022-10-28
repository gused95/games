import React from 'react'

import { useState, useEffect } from 'react';
import CollectionForm from '../../components/CollectionForm/CollectionForm';
import { useNavigate, useParams } from 'react-router-dom';
// import the service file since we need it to send/get the data to/from the server
import service from '../../api/service';

const EditGame = () => {

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
        imageUrl}
        
        
        
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
    <div>
        EditGame
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
    </div>
  )
}

export default EditGame