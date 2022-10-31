This is an app to manage your games collection.

In order to enable all the features, you have to add in the root a .env file with the following structure, respectively:

client:

REACT_APP_SERVER_URL=http://localhost:5005

server:

PORT=5005 ; ORIGIN=http://localhost:3000 ; CLOUDINARY_NAME = < YOUR ACCOUNT KEY > ; CLOUDINARY_KEY = < YOUR ACCOUNT KEY > ; CLOUDINARY_SECRET = < YOUR ACCOUNT KEY > ;