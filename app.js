const {create}= require("express-handlebars");
const path = require("path");
const {fileURLToPath}=require('url');
const Express =require('express')
const Morgan=require('morgan')
const{router}=require('./routes/index.routes')

/*constantes*/
const app= Express();
const morgan= Morgan();


/*configuracion de hbs*/
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



/*middlewares*/
app.set("view engine", ".hbs");
app.use(Express.urlencoded({extended:false}))
app.use(Morgan('dev'))
app.use(router)

module.exports={
    app
}
