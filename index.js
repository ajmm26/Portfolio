const{app}=require('./app')
require('dotenv').config({path: './.env'});
const PORT =process.env.PORT

app.listen(PORT)

console.log("Puerto " +  PORT);