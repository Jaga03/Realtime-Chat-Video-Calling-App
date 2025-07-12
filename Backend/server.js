import express from 'express'
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'
import cors from 'cors'
import authRoutes from './routes/auth.route.js'
import messageRoutes from './routes/message.route.js'
import { connectDB } from './lib/db.js'
import {app,server} from './lib/socket.js'




dotenv.config()

const port = process.env.PORT || 5000;



app.use(express.json({ limit: "10mb" }));

app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.use(cookieParser());

app.use(cors({ origin: ['http://localhost:5173','https://chatzup-app.vercel.app'], credentials: true }))

app.use('/api/auth',authRoutes)
app.use('/api/message',messageRoutes)




server.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
    connectDB()
})