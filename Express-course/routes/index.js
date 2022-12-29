const router = require('express').Router();

router.get("/",(req,res)=>{
    res.render('index',{
        title:'My Home page'
    });
})
router.get("/about",(req,res)=>{
    res.render('about',{
        title:"My About page"
    });
})

//download file
// router.get("/download",(req,res)=>{
//     res.download(path.resolve(__dirname) + "/about.html");
// })
module.exports = router;