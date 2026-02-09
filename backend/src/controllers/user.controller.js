const users = require("../data/users");
const { uuid } = require("uuidv4");

//Create a user

const createUser = (req, res) => {
  const { userId, name, email } = req.body;

  if (!userId) {
    res.status(400).json({
      message: "Please, User ID is missing.",
    });
    return;
  }
  if (!name) {
    res.status(400).json({
      message: "Please, name is missing.",
    });
    return;
  }
  if (!email) {
    res.status(400).json({
      message: "Please, email is required",
    });
    return;
  }

  if (typeof name !== "string" || typeof email !== "string") {
    return res.status(400).json({
      message: "Invalid data type",
    });
  }

  if (!email.includes("@")) {
    return res.status(400).json({
      message: "Invalid email format",
    });
  }

  const emailExist = users.find((u) => u.email === email);
  if (emailExist) {
    return res.status(409).json({
      message: "Email already exist!",
    });
  }
  const userIdExist = users.find((u) => u.userId === userId);
  if (userIdExist) {
    return res.status(409).json({
      message: "User whi this ID already exist!",
    });
  }

  const newUsers = {
    id: uuid(),
    userId,
    name,
    email,
    created_at: new Date().toLocaleTimeString(),
  };
  users.push(newUsers);
  console.log("New user is created", newUsers);

  res.status(201).json({
    message: "User created successfully!!",
    user: newUsers,
  });
};

// List all users

const listUsers = (req, res) => {
  return res.json(users);
};

// Update a user
const updateUser = (req, res) => {
  const { id } = req.params;

  const userIndex = users.findIndex((u) => u.id == id);
  if (userIndex === -1) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  const ALLOWED_KEY = ["name", "email"];
  const updates = {};

  for (const key of ALLOWED_KEY) {
    if (req.body[key] !== undefined) {
      if (key === "name" && typeof req.body[key] !== "string") {
        return res.status(400).json({
          message: "Invalid name.",
        });
      }

      if (key === "email" && !req.body[key].includes("@")) {
        return res.status(400).json({
          message: "Invalid email.",
        });
      }

      updates[key] = req.body[key];
    }
  }

  users[userIndex] = {
    ...users[userIndex],
    ...updates,
    updated_at: new Date().toLocaleTimeString(),
  };

  res.status(200).json({
    message: "User updated successfully!!",
    user: users[userIndex],
  });
  console.log("User updated Successfully:", users[userIndex]);
};

// Get user by ID

const getUserById = (req, res) => {
  const { id } = req.params;

  const singleUser = users.find((u) => u.id == id);
  if (!singleUser) {
    return res.status(400).json({
      message: "User not found",
    });
  }

  res.status(200).json(singleUser);
};

module.exports = {
  createUser,
  listUsers,
  getUserById,
  updateUser,
};
