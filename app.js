require('dotenv').config();

// const patch=require('patch');

const express=require('express');
const app=express();
const fileUpload=require('express-fileupload');

//database connecting
const mongoose=require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);

app.use(express.json());
app.use(fileUpload());

// app.use('/uploads',express.static(patch.join(__dirname,'uploads')));

let userRoute=require('./routes/user');
let postRoute=require('./routes/post');

const {saveFile,saveFiles,deleteFile}=require('./utils/gallery');

app.post('/gallery',async (req,res,next)=>{
    await deleteFile(req.body.name);
    res.status(200).json({msg:"File Deleted"});
    // res.status(200).json({msg:"File Uploaded", "filenames":req.body.images});
});


app.post('/galleryy', saveFiles , (req,res,next)=>{
    res.status(200).json({msg:"File Uploaded", "filenames":req.body.images});
});

// const funky=(req,res,next)=>{
//     console.log(req.warningMsg);
//     res.json({msg:"coming with get method"});
// };

// const islogged=(req,res,next)=>{
//     if(1+1==2){
//         req.successMsg="We are good to go";
//         next();
//     }else{
//         next(new Error("You are not logged in"));
//     }
// }

// const isAdmin=(req,res,next)=>{
//     if(3+3 ==6){
//         console.log(req.successMsg);
//         req.warningMsg="this is warning message";
//         next();
//     }else{
//         next(new Error("Only admin can acess this route"));
//     }
// }

// app.get('/users',islogged,isAdmin,funky);

// app.use('/users',userRoute);
app.use('/users',userRoute);
app.use('/posts',postRoute);

//error handling
app.use((err,req,res,next)=>{
    err.status=err.status || 200;
    res.status(err.status).json({
        cons:false,
        msg:err.message
    });

});

app.listen(process.env.PORT,console.log(`Server is running at port ${process.env.PORT}`));

