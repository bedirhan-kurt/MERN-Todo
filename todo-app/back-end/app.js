require('dotenv').config();
const requestLogger = require('./middleware/logger');
const morgan = require('morgan');
const express = require('express');
const connectDB = require('./db/connect');
const cors = require('cors');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
const checkJwt = require('./middleware/checkJwt');

const app = express();

const tasks = require('./routes/tasks');

// Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}));

// Routes
app.use('/api/v1/tasks', checkJwt, tasks)

// Error Middleware
app.use(notFound)
app.use(errorHandler)

const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URI);
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    } catch (error) {
        console.error(error + '\nFailed to connect to the database');
    }
}

start()