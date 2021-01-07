// export const home = (req, res) => res.send("Home");
// export const search = (req, res) => res.send("Search");
// export const videos = (req, res) => res.send("Videos");
// export const upload = (req, res) => res.send("Upload");
// export const videoDetail = (req, res) => res.send("Video Detail");
// export const editVideo = (req, res) => res.send("Edit Video");
// export const deleteVideo = (req, res) => res.send("Delete Video");

// export const home = (req, res) => res.render("home");
// export const search = (req, res) => res.render("search");
// export const upload = (req, res) => res.render("upload");
// export const videoDetail = (req, res) => res.render("videoDetail");
// export const editVideo = (req, res) => res.render("editVideo");
// export const deleteVideo = (req, res) => res.render("deleteVideo");

// export const home = (req, res) => res.render("home"-> 페이지, { pageTitle: "Home" }-> 해당 페이지의 타이틀);

// import { videos } from "../db";
import routes from "../routes";
export const home = (req, res) => {
	res.render("home", { pageTitle: "Home", videos });
};

export const search = (req, res) => {
	const {
		query: { term: searchingBy },
	} = req;
	res.render("search", { pageTitle: "Search", searchingBy, videos });
};

// export const upload = (req, res) =>
//   res.render("upload", { pageTitle: "Upload" });
export const getUpload = (req, res) =>
	res.render("upload", { pageTitle: "Upload" });

export const postUpload = (req, res) => {
	const {
		body: { file, title, description },
	} = req;
	// To Do: Upload and save video
	res.redirect(routes.videoDetail(324393));
};

export const videoDetail = (req, res) =>
	res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
	res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
	res.render("deleteVideo", { pageTitle: "Delete Video" });

// export const search = (req, res) =>
//   res.render("search", { pageTitle: "Search" });
// export const upload = (req, res) =>
//   res.render("upload", { pageTitle: "Upload" });
// export const videoDetail = (req, res) =>
//   res.render("videoDetail", { pageTitle: "Video Detail" });
// export const editVideo = (req, res) =>
//   res.render("editVideo", { pageTitle: "Edit Video" });
// export const deleteVideo = (req, res) =>
//   res.render("deleteVideo", { pageTitle: "Delete Video" });
