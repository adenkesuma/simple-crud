import express from "express"
import mongoose from "mongoose"
import cors from "cors"

import UserRoute from "./routes/UserRoute.js"

const app = express()
const port = 5000

// connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/fullstack', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Database connected")
}).catch((err) => {
    console.log(err)
})



app.use(cors())
app.use(express.json())

app.use(UserRoute)

app.listen(port, () => {
    console.log(`server up and running on port http://localhost:${port}`)
})