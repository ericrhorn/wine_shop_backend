const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user.models");
const SECRET = process.env.FIRST_SECRET_KEY;

const register = async (req, res) => {
  try {
    // Extract isAdmin flag from the request body
    console.log("Request Body:", req.body);
    const { isAdmin, ...userData } = req.body;

    // Create a new user instance with isAdmin set based on the isAdmin flag
    const user = new User({
      ...userData,
      isAdmin: isAdmin || false, // Default to false if isAdmin is not provided
      isManager: isAdmin || false, // Default to false if isAdmin is not provided
    });

    const newUser = await user.save();

    console.log("new user", newUser);

    const userToken = jwt.sign(
      {
        _id: newUser._id,
        email: newUser.email,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        isAdmin: newUser.isAdmin,
        isManager: newUser.isManager,
      },
      SECRET
    );
    console.log("jst", userToken);
    res
      .status(201)
      .cookie("userToken", userToken, {
        httpOnly: true,
      })
      .json({
        msg: "success!",
        user: newUser,
      });
  } catch (error) {
    console.log("register not successful", error);
    res.status(400).json(error);
  }
};

const login = async (req, res) => {
  const userRecord = await User.findOne({ email: req.body.email });
  console.log("user record", userRecord);
  if (!userRecord) {
    res.status(400).json({ error: "Invalid Email or Password" });
  } else {
    try {
      const isPasswordValid = await bcrypt.compare(
        req.body.password,
        userRecord.password
      );
      if (!isPasswordValid) {
        res.status(400).json({ error: "Invalid Email or Password" });
      } else {
        const userToken = jwt.sign(
          {
            _id: userRecord._id,
            email: userRecord.email,
            firstName: userRecord.firstName,
            lastName: userRecord.lastName,
          },
          SECRET
        );
        console.log("jwt", userToken);
        res
          .status(201)
          .cookie("userToken", userToken, {
            httpOnly: true,
          })
          .json({
            msg: "successfully logged in!",
            user: userRecord,
          });
      }
    } catch (error) {
      console.log("login error", error);
      res.status(400).json(error);
    }
  }
};

const logout = (req, res) => {
  console.log("successfully logged out");
  res.clearCookie("userToken");
  // res.sendStatus(200);
  res.json({
    message: "you have logged out",
  });
};

const getLoggedInUser = (req, res) => {
  const user = jwt.verify(req.cookies.userToken, SECRET);

  User.findById({ _id: user._id })
    .then((user) => res.json(user))
    .catch((err) =>
      res.json({ message: "uh oh... cant show logged in user", error: err })
    );
};

const showUsers = (req, res) => {
  User.find({})
    .collation({ locale: "en", strength: 2 })
    // .sort({ petType: 1 })
    .then((allUsers) => res.json(allUsers))
    .catch((err) => res.status(400).json(err));
};

const showOneUser = (req, res) => {
  User.findOne({ _id: req.params._id })
    .then((oneUser) => res.json(oneUser))
    .catch((err) => res.status(400).json(err));
};

const updateUser = async (req, res) => {
  try {
    const { password, ...updateData } = req.body;

    if (password) {
      // Hash the new password
      const hashedPassword = await bcrypt.hash(password, 10);
      updateData.password = hashedPassword;
    }

    const updatedUser = await User.findOneAndUpdate(
      { _id: req.params._id },
      updateData,
      {
        new: true,
        runValidators: true,
      }
    );

    res.json(updatedUser);
  } catch (err) {
    res.status(400).json(err);
  }
};

// const deletePet = (req, res) => {
//   Pet.deleteOne({ _id: req.params._id })
//     .then((result) => res.json(result))
//     .catch((err) => res.status(400).json(err));
// };

module.exports = {
  register,
  login,
  logout,
  getLoggedInUser,
  showUsers,
  updateUser,
  showOneUser,
  // deleteUser,
};
