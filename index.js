const express = require("express");
const path = require("path");
const sequelize = require('./models');
const bodyParser = require('body-parser');
const userCtrl = require('./controller/userController');
const PORT = process.env.PORT || 3000;
const jwt = require('jsonwebtoken')
const multer = require('multer');
const fs = require('fs');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

const uploadsDir = path.join(__dirname, 'public');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.post("/create", upload.single('profileImage'),userCtrl.createPost);


app.get("/createP", userCtrl.crtPost);

app.post("/register", userCtrl.addUser);
app.post('/login', userCtrl.checkPswd);


const secretKey = "YoYo";

function verifyToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const token = bearer[1];
    jwt.verify(token, secretKey, (err, authData) => {
      if (err) {
        res.sendStatus(403); 
      } else {
        req.authData = authData;
        next();
      }
    });
  } else {
    res.sendStatus(403);
  }
}

app.post("/profile", verifyToken, userCtrl.profileUser);


app.patch("/update/:id",userCtrl.updatePost);
app.delete('/delete/:id',userCtrl.deletePost)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
