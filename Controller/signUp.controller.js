import signup from "../Model/signup.model.js";
import bcryyptjs from "bcryptjs";
export const PostSignup=(async (req,res)=>{

    try{
        const {
            collegeId,fullname,fathername,email,course,gender,phone,password}=req.body;
        const model=await signup.findOne({email});
        if(model){
        return res.status(400).json({message:"Student already Exist"});
        }
        const hashpswd= await bcryyptjs.hash(password,10);
    const createdUser=new signup({
        collegeId: collegeId,
        fullname:fullname,
        fathername:fathername,
        email:email,
        course:course,
        gender:gender,
        phone:phone,
        password:hashpswd,
    })
  await  createdUser.save();
    res.status(201).json({message:"Student Registered SuccessFully",createdUser:{
        _id:createdUser._id, 
         fullname:createdUser.fullname,
         email:createdUser.email
    }})
    }
    catch(error)
    {
        console.log("Error",error);
        res.status(500).json({message:"Internal Server Error"});

    }
});

export const login=(async(req,res)=>{
    try
    {
        const {email,password}=req.body;
        const user=await signup.findOne({email});
        
        const isMatch= await bcryyptjs.compare(password,user.password);
        if(!user||!isMatch)
        {
            return res.status(400).json({message:"Invalid Username or Password"})
        }
        else
        {
            return res.status(200).json({message:"Login SuccessFully",user:{
               _id:user._id, 
                fullname:user.fullname,
                email:user.email
            }})
        }


    }
    catch(error)
    {
     console.log("Error: ",error.message);
     res.status(500).json({message:"Internal Server Error"})

    }
})