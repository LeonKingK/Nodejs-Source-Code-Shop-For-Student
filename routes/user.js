const router=require('express').Router();


// router.get("/",(res,req)=>{
//     res.json({msg:"All Users"})
// });

router.post("/:id",(req,res)=>{
    let id=req.params.id;
    res.json({msg:"User post id is " +id});
});

// router.get("/:id",(req,res)=>{
//     let id=req.params.id;
//     res.json({msg:"Request id is "+ id});
// });

router.route("/:id")
.get((req,res)=>res.json({msg:"User get method id is "+ req.params.id}))
.patch((req,res)=>res.json({msg:"User patch method is "+ req.params.id}))
.delete((req,res)=>res.json({msg:"User delete method id is" + req.params.id}));



// router.patch("/:id",(req,res)=>{
//     let id=req.params.id;
//     res.json({msg:"User patch id is" + id});
// });
// router.delete("/:id",(req,res)=>{
//     let id=req.params.id;
//     res.json({msg:"User delete id is"+ id});
// });

module.exports=router;