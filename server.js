const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const path = require('path')
connectDB()
dotenv.config()



const app = express()

app.use(express.json({extended: false}))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))


// Server static assets if in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=>{
    console.log(`Server is running under port ${PORT}`)
})