const mongoose=require("mongoose")
const schema=mongoose.Schema
const UserSchema= new schema({
    name:{
       type:String,
       requireq:true 
    },
    lastName:{
        type:String,
        requireq:true 
    },
    email:{
        type:String,
        requireq:true 
    },
    password:{
        type:String,
        requireq:true 
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

module.exports=mongoose.model("user", UserSchema)