# MERN-Stack-Exercise-Tracker-App

## Tools Used 
- MongoDB
- ExpressJs
- React
- NodeJs

### This repo contains complete Backend and FrontEnd code with documentaition 
this app is made using React Functional Components and React Hooks
- React UseState()
- React UseEffect()

# MERN STACK Exercise App Backend

## Tools Used
- Express ( NodeJs Server)
- Nodemon
- Mongoose
- MongoDB Atlas


# MERN STACK EXERCISE APP FRONTEND

## TOOLS USED
- ReactJS
- Bootstrap
- React Router v6 ( npm i react-router-dom@next )
- React-DatePicker
- Axios

## Deployment   
I have deployed this MERN Stack App on two different platforms 

- Netlify (Frontend) [link](https://mern-stack-exercise-app.netlify.app/)
- Heroku  (Backend)


## Backend Express Server is Deployed on Heroku
Steps

Create a Heroku account or sign in if you have one

Install the Heroku CLI


Go to your terminal and type

    heroku login

This will prompt you to press any key, once you do it will take you to your browser where you will just need to click 'Log In'.

Once this is successful you can close that browser window and navigate to your text editor now with your project open
Create a file named Procfile, no file extension, in /server directory.

Include this text and this text only in the Procfile

        web: node dist/main.js

This tells Heroku what to do after building our app - which specifically is to run our bundled file from webpack with all of our server logic inside it
If we didn't include this it would likely build just fine but never actually start our server
Now we must add to our server/package.json the following block:


        "engines": {
            "node": "14.x",
            "npm": "6.14.7"
        },

We need to allow access to your MongoDB database now from a new IP address. For simplicity, I added all IP addresses to be allowed.

BIG NOTE: In a production app you do not want to allow all IP addresses to access your database! You will want to find the specific IP address that hosts your server-side and add just that one as allowed.
The app I deployed does not contain any sensitive information. It's just a simple card game so no need for me to be super secure. Once more, do not do this for a real production app or even a side project that may contain sensitive information.

create a remote connection with Heroku 

        heroku git:remote -a <projecct-name>

The command we need to push our server code specifically, because we have the separation of client and server in our project structure, is git subtree push --prefix server heroku master

        git subtree push --prefix server heroku master

Now for our MongoDB connection to work we must define an environment variable for Heroku to store our MongoDB connection string.       

Using the Heroku CLI
Set a config var

        heroku config:set ATLAS_URI=<"Your MONGODB ATLAS URI" >


## Client Side Deployed on Netlify

Login to Netlify and use the GUI to select your git repo you want to deploay, give build and deploay setting and thats it.

## Routing allows you to manage the traffic to and from your Netlify site.

You can enable powerful static routing features like redirects, rewrites, and proxies by defining rules in a site's _redirects file or Netlify configuration file.

- I have created a _redirects file in the public folder and simply added this code

          /* /index.html 200
          
  This will enable static routing feature in your App      
        

### LASTLY after we deploy our front-end React code we must ensure any requests we're sending from the client-side is changed to use our Heroku URL now instead of localhost

- at any place I used the route localhost:5000,  replaced it with the heroku url

        // Before
        const res = await fetch('http://localhost:5000/users/'

        // After
        const res = await fetch('https://my-project.herokuapp.com/users/')

