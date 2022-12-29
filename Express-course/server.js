const express = require('express');
const path = require("path");
const app = express();
const mainRouter = require('./routes/index')
const PORT = process.env.PORT || 3001;

app.set('view engine','ejs');
// console.log(app.get('view engine'))
//change views folder name
// app.set('views',path.resolve(__dirname)+'/templates');
//  console.log(app.get('views'))
app.use(express.static('public'));

app.use(mainRouter)

app.listen(PORT,()=>{
    console.log(`Server Started on PORT ${PORT}`);
})