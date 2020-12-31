import express from "express";
import routes from "../routes";
import {
  getUpload,
  postUpload,
  videoDetail,
  editVideo,
  deleteVideo
  } from "../controllers/videoController";

const videoRouter = express.Router();

// videoRouter.get(routes.videos, (req, res) => res.send("Videos"));
// videoRouter.get(routes.upload, (req, res) => res.send("Upload"));
// videoRouter.get(routes.videoDetail, (req, res) => res.send("Video Detail"));
// videoRouter.get(routes.editVideo, (req, res) => res.send("Edit Video"));
// videoRouter.get(routes.deleteVideo, (req, res) => res.send("Delete Video"));

// videoRouter.get(routes.videos, videos);
// 왜 지우지?

// videoRouter.get(routes.upload, upload);
// videoRouter.get(routes.videoDetail, videoDetail);

videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, postUpload);
videoRouter.get(routes.videoDetail(), videoDetail);
videoRouter.get(routes.editVideo, editVideo);
videoRouter.get(routes.deleteVideo, deleteVideo);

export default videoRouter;