const express = require('express')
const {connect}= require('./config/db')
const {route} = require("./routes/userRoute")
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("welcome to my  store")
})

app.use("/user",route)

app.listen(5200, async () => {
    try {
        connect()
        console.log("Your server is running at http://localhost:5200")

    } catch (error) {
        console.log(error)

    }

})