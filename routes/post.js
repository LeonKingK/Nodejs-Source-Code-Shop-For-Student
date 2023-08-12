const router=require('express').Router();

// router.get("/",(req,res)=>{
//     res.json({msg:"All posts found!"});
// });

// router.get("/:id",(req,res)=>{
//     let id=req.params.id;
//     res.json({msg:"User post method id is " + id});
// });

// router.post("/",(req,res)=>{
//     res.json(req.body);
// });
router.route("/:id")
.get((req,res)=>res.json({msg:"User post method id is " + req.params.id}))
.patch((req,res)=>res.json({msg:"User patch method id is "+req.params.id}))
.delete((req,res)=>res.json({msg:"User delete method id is "+req.params.id}));


module.exports=router;
