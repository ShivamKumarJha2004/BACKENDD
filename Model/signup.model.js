import mongoose from "mongoose";

const signUpschema= mongoose.Schema({
    collegeId:{
       type:String,
       require:true
    },
    fullname:
    {
        type:String,
        require:true
    },
    fathername:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:true
    },
    course:{
        type:String,
        require:true
    },
    gender:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },

});
const signup=mongoose.model("signup",signUpschema);
export default signup;