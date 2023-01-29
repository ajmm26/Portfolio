const {create}= require("express-handlebars");
const path = require("path");
const {fileURLToPath}=require('url');
const{app}=require('./app')



app.set("views", path.join(__dirname, "views"));

app.engine(
  ".hbs",
  create ({
      layoutsDir: path.join(app.get("views"), "layouts"),
      defaultLayout: "main",
      extname: ".hbs",
    }
  ).engine
);
app.set("view engine", ".hbs");


app.use(Express.urlencoded({extended:false}))