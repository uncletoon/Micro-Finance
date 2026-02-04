const express = require('express');
const userRouter = express.Router();


const {
    createUser,
    listUsers,
    getUserById,
    updateUser
} = require("../controllers/user.controller")

userRouter.post("/", createUser)
userRouter.get("/", listUsers)
userRouter.get('/:id', getUserById)
userRouter.patch('/:id', updateUser)



module.exports = userRouter;