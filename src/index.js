const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.set("appName", "Nodejs first project");
app.set("port", process.env.PORT || 3000);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require("./routes/index"));
app.use(express.static(path.join(__dirname, "public")));

app.use("/GameTriky", express.static(path.join(__dirname, "static/gameTriky")));
app.use(
  "/CommentSystem",
  express.static(path.join(__dirname, "static/commentSystem"))
);
app.use(
  "/ShoppingCart",
  express.static(path.join(__dirname, "static/shoppingCart"))
);
app.use("/Calculator", express.static(path.join(__dirname, "static/Calculator")));
app.use("/TimeCounter", express.static(path.join(__dirname, "static/timeCounter")));
app.use("/MemeCreator", express.static(path.join(__dirname, "static/memeCreator")));
app.use(
  "/ConverterJson_CSV",
  express.static(path.join(__dirname, "static/JSON_CSV"))
);
app.use("/Pomodoro", express.static(path.join(__dirname, "static/pomodoro")));
app.use(
  "/Virtualkeyboard",
  express.static(path.join(__dirname, "static/virtualkeyboard"))
);
app.use(
  "/ImageGallery",
  express.static(path.join(__dirname, "static/imageGallery"))
);
app.use("/WebSite", express.static(path.join(__dirname, "static/sitioWeb")));

app.listen(app.get("port"));
console.log(
  `Server ${app.get("appName")} listening only on port ${app.get("port")}`
);
