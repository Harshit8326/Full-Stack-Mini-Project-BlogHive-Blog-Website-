const { where } = require("sequelize");
var db = require("../models");
var User = db.user;
var Post = db.posts;
const path = require("path");
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");

const secretKey = "YoYo";

var addUser = async (req, res) => {
  const { Username, Email, Password } = req.body;

  // const saltRound=10;
  // const hash_Password=await bcrypt.hash(Password,saltRound);

  var data = await User.create({
    Username: Username,
    Email: Email,
    Password: Password,
  });
  res.status(200).sendFile(path.join(__dirname, "../public", "login.html"));
};

var checkPswd = async (req, res) => {
  const { login_email, login_password } = req.body;
  const data = await User.findOne({
    where: {
      Email: login_email,
    },
  });
  if (!data) {
    return res.status(404).json({ error: "User not found" });
  }

  const isMatch = await bcrypt.compare(login_password, data.Password);
  
  if (!isMatch) {
    return res.status(401).json({ error: "Invalid credentials" });
  }

  jwt.sign({User},secretKey,{expiresIn:"600s"},(err,token)=>{
    res.status(200).json({
      message: "Login successful",
      token: token,
    });
  })

  // res.status(200).sendFile(path.join(__dirname, "../public", "index.html"));
};

var profileUser=async(req, res) => {
  res.json({
    message: "Profile accessed",
    authData: req.authData,
  });
  // res.status(200).sendFile(path.join(__dirname, "../public", "index.html"));
}

var createPost = async (req, res) => {
  const { Title, Content } = req.body;
  const profileImage = req.file ? req.file.filename : null;

  console.log('req.file:', req.file); // Debug: Check if req.file is populated
  console.log('profileImage:', profileImage); // Debug: Check the filename

  var data = await Post.create({ Title: Title, Content: Content, ImagePath: profileImage });
  res.status(200).sendFile(path.join(__dirname, "../public", "create.html"));
};

var crtPost = async (req, res) => {
  var data = await Post.findAll();
  res.json(data);
};

var updatePost = async (req, res) => {
  try {
    if (!req.query.title || !req.query.content) {
      throw new Error("Title and content are required.");
    }
    console.log(
      req.params.id + " " + req.query.title + " " + req.query.content
    );
    var data = await Post.update(
      { Title: req.query.title, Content: req.query.content },
      { where: { id: req.params.id } }
    );

    res.send("UPDATED");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

var deletePost = async (req, res) => {
  var data = await Post.destroy({
    where: {
      id: req.params.id,
    },
  });
  res.send("DELETED");
};

module.exports = {
  addUser,
  checkPswd,
  createPost,
  crtPost,
  updatePost,
  deletePost,profileUser
};
