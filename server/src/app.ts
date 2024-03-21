import express, {Express} from "express"
import mongoose, { ConnectOptions } from "mongoose"
import cors from "cors"
import todoRoutes from "./routes"

const app: Express = express()

const PORT: number = Number(process.env.PORT) || 4000

app.use(cors())
app.use(express.json())
app.use(todoRoutes)

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@first-todo.lf51ndi.mongodb.net/?retryWrites=true&w=majority&appName=first-todo`



mongoose
        .connect(uri)
        .then(() => 
                app.listen(PORT, () => 
                        console.log(`Server running on http://localhost:${PORT}`)
                )
        )
        .catch(error => {
                throw error
        })