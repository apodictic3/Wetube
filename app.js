import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares";
import routes from "./routes";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";
import globalRouter from "./routers/globalRouter";

// import { userRouter } from "./router";
//export할때 default로 하지 않았을 때 작성법

const app = express();

app.use(helmet());
app.set("view engine", "pug"); //pug를 쓰기 위한 초기 설정?
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(localsMiddleware);

// app.use("/", globalRouter);
// app.use("/user", userRouter);
// //왜 이렇게 묶어서 할까? 관리 때문에?
// app.use("/video", videoRouter);
app.use(routes.home, globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;

// M data V how does the data look C function that looks for the data