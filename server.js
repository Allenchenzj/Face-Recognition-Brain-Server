const express = require('express');
const bodyParser = require('body-parser');
const bcrypt =require('bcrypt-nodejs');
const cors = require('cors');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');


const db = require('knex')({
  client: 'pg',
  connection: {
    host : '127.0.0.1',
    user : 'postgres',
    password : '203940',
    database : 'smart-brain'
  }
});

const app = express();
app.use(cors());
app.use(bodyParser.json());


const database = {
	users: [
	  {
	  id: '123',
	   name: 'John',
	   email: 'John@gmail.com',
	   password: 'cookies',
	   entries: 0,
	   joined: new Date()
	  },
	  {id: '124',
	   name: 'Sally',
	   email: 'Sally@gmail.com',
	   password: 'bananas',
	   entries: 0,
	   joined: new Date()
	  },
	
app.get('/', (req, res)=> {
  res.send(database.users);
})

app.post('/signin', (req, res) => { signin.handleSignin(req, res, db, bcrypt)})
app.post('/register', (req, res) => {register.handleRegister(req, res, db, bcrypt)})
app.get('/profile/:id', (req, res) => { profile.handleProfile(req, res, db)})
app.put('/image', (req,res) => {image.handleImage(req, res, db)})
app.post('/imageurl', (req,res) => {image.handleApiCall(req, res)})

app.listen(3000, () => {
	console.log("app is running on port 3000");
})