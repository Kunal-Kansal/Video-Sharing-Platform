const express = require("express");
require("../../db/conn");

const VideoSchema = require("../../model/VideoSchema");
const router = express.Router();

router.post("/upload", async (req, res) => {
  const userid = req.user._id;

  const { Title, Describtion, ImageURL, VideoURL, Category, Visiblity } =
    req.body;
  const data = new VideoSchema({
    UserID: UserID,
    Title: Title,
    Describtion: Describtion,
    ImageURL: ImageURL,
    VideoURL: VideoURL,
    Category: Category,
    Visiblity: Visiblity,
  });
  try {
    const newVideo = await data.save();
    res.status(200).send("Video uploaded successfully");
  } catch (e) {
    res.status(404).send("error");
  }
});

router.get("/home", async (req, res) => {
  try {
    const data = await Video.aggregate([{ $sample: { size: 40 } }]);
    res.status(200).json(data);
  } catch (err) {
    res.send("error");
  }
});

router.post("/myvideos", async (req, res) => {
  const userid = req.user._id;
  const data = await Video.find({ userid: userid });
  res.status(200).json(data);
});

module.exports = router;
