const express = require("express");
const router = express.Router();

let user = require("../models/user"); // 스키마 불러오기

// Create
router.post("/", function (req, res, next) {
  const { id, pw, name } = req.body; // 비구조화 할당

  console.log(req.body);

  let userModel = new user();
  userModel.id = id;
  userModel.pw = pw;
  userModel.name = name;
  userModel
    .save()
    .then(userinfo => {
      console.log("Create success");
      res.status(200).json({
        message: "Create success",
        data: {
          userinfo,
        },
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err,
      });
    });
});

router.get("/", function (req, res, next) {
  user
    .find()
    .then(posts => {
      console.log("Read All 완료");
      res.status(200).json({
        message: "Read All success",
        data: {
          post: posts,
        },
      });
    })
    .catch(err => {
      res.status(500).json({
        message: err,
      });
    });
});

module.exports = router;
