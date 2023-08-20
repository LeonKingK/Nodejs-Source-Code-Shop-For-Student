const all=async(req,res,next)=>{
    res.json({msg:"All users"});
    };
    
    const post=async(req,res,next)=>{
        res.json({msg:"All user posts is here",result:req.body});
    };
    
    const get=async(req,res,next)=>{
        res.json({msg:"All get is here"});
    };
    
    const patch=async( req ,res ,next)=>{
        res.json({msg:"All user patch is here"});
    };
    
    const drop=async(req,res,next)=>{
        res.json({msg:"All user delete is here"});
    };
    
    module.exports={
        all,
        post,
        get,
        patch,
        drop,
    }