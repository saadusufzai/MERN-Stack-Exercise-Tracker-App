# MERN STACK EXERCISE APP FRONTEND

## TOOLS USED
- ReactJS
- Bootstrap
- React Router v6 ( npm i react-router-dom@next )
- React-DatePicker
- Axios

## Client Side Deployed on Netlify

Login to Netlify and use the GUI to select your git repo you want to deploay, give build and deploay setting and thats it.

### LASTLY after we deploy our front-end React code we must ensure any requests we're sending from the client-side is changed to use our Heroku URL now instead of localhost.

- at any place I used the route localhost:5000,  replaced it with the heroku url

        // Before
        const res = await fetch('http://localhost:5000/users/'

        // After
        const res = await fetch('https://my-project.herokuapp.com/users/')

You can also create .env file and store URL there in a url variable
then change it at only one place and it will be replaced on all places.