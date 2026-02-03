const express = require('express');
const userRouter = express.Router();


const {
    createUser,
    listUsers,
    getUserById,
    getUserByQuery,
    updateUser
} = require("../controllers/user.controller")

userRouter.post("/", createUser)
userRouter.get("/", listUsers)
userRouter.get('/:id', getUserById)
userRouter.patch('/:id', updateUser)
userRouter.get('/search', getUserByQuery)



module.exports = userRouter;