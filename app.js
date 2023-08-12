const express=require('express');
const app=express();


app.use(express.json());

let userRoute=require('./routes/user');
let postRoute=require('./routes/post');

app.use("/users",userRoute);
app.use('/posts',postRoute);

app.listen(3000,console.log("Server is running at port 3000"));