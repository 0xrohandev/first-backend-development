import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"

const app = express()

app.use(cors ({                                                             // app.use is used to add a middleware. In this case it is cors, which allows limited origins
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}))                                      // app.use is used to add a middleware to parse the json file with limitting its size,to prevent from server crash

app.use(express.urlencoded({extended: true, limit: "16kb"}))                // app.use is used for urlencoded. Here extended means you can give nested objects, in general you dont use it

app.use(express.static("public"))                                           // app.use is used to keep files in public folder

app.use(cookieparser())                                                     // app.use is used to perform CRUD operations on cookies

export {app}