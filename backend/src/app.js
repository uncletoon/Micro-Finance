const express = require('express');
const app = express();

app.use(express.json());

const healthRouter = require('./routes/health.routes');
const userRouter = require('./routes/user.routes');


app.get("/", (req, res) => {
    res.send("It's work!!!!")
});


app.use("/health", healthRouter);
app.use("/users", userRouter);


module.exports = app;