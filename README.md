# ReactGithub
by Adam Wallis

After clonging this repository, please navigate into the api_app folder and run 'npm install' in the terminal to install dependencies for this project
Then run 'npm start' and navigate to your browser at https://localhost:3000/

Upon loading the application, a request will recieve contributor-level data from the facebook/react repo. 
When clicking on any row, a subsequent request will recieve user-level data and render the detail view once that request is filled. (This choice was prefered rather than watch the detail popup open and then update with detail response data.)