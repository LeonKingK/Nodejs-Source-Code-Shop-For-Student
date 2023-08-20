// const all=async(req,res,next)=>{
// res.json({msg:"All users"});
// };
const DB = require('../dbs/user');
const Helper=require('../utils/helper');

const all=async(req,res,next)=>{
    let users=await DB.find();
    Helper.fMsg(res,"All Users",users);

    // res.status(200).json({
    //     con:true,
    //     msg:"All Users",
    //     result:[]
    // })
};

const add = async(req,res,next)=>{
//     res.status(200).json({
//         con:true,
//         msg:"Add New User",
//         result:req.body
//     })
// }
    let saveUser=new DB(req.body);
    let result=await saveUser.save();
    Helper.fMsg(res,"User Added",result);
    
};
  

const get=async(req,res,next)=>{
    let id=req.params.id;
    let user = await DB.findById(id);
    Helper.fMsg(res,"Single user get ",user);
};

const patch=async(req,res,next)=>{
    let user=await DB.findById(req.params.id);
    if(user){
        await DB.findByIdAndUpdate(user._id,req.body);
        let retUser=await DB.findById(user._id);
        Helper.fMsg(res,"Update updated",retUser);

    }else{
        next(new Error("Error,No user with that id"));
    };
    
};

const drop=async(req,res,next)=>{
   await DB.findByIdAndDelete(req.params.id);
   Helper.fMsg(res,"This user is deleted");
};
// const patch( req ,res ,next)=>{
//     res.json({msg:"All user patch is here"});
// };

// const drop=(req,res,next)=>{
//     res.json({msg:"All user delete is here"});
// };

module.exports={
   all,
   add,
   get,
   patch,
   drop
}