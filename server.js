require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')

const connectDB = require('./config/database')
connectDB()

const userRouter = require('./router/user')

// middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended :false}))

app.use(morgan('dev'))

app.use('/script', express.static(__dirname + '/script'))

app.use('/user', userRouter)

// setting ejs 
app.set('views', __dirname + '/views')
app.set('view engine', 'ejs')
app.engine('html', require('ejs').renderFile)

app.get('/', (req, res) => {

    res.render('signup.html')
})

app.get('/login', (req, res) => {
    
    res.render('login.html')
})

app.get('/index', (req, res) => {

    res.render('index.html')
})

const PORT = process.env.PORT || 7000

app.listen(PORT, console.log("connected server..."))