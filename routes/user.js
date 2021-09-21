const express = require("express");
const router = express.Router();
const User = require("../models/User");
const controllers = require("../controllers/user");
const {
  loginRules,
  registerRules,
  validation,
} = require("../middleware/validator");

const isAuth = require("../middleware/passport");

// router.get("/", (req, res) => {
//   res.send("hello world");
// });

//@method POST
//@desc POST A USER
// @PATH  http://localhost:5000/user/register
// @Params  Body
// register
router.post("/register", registerRules(), validation, controllers.register);

//@method POST
//@desc POST A USER
// @PATH  http://localhost:5000/user/login
// @Params  Body
// register
// login
router.post("/login", loginRules(), validation, controllers.login);

//@method POST
//@desc GET A USER
// @PATH  http://localhost:5000/user/current
// @Params  Body
// get current user
router.get("/current", isAuth(), controllers.current);


//@Method GET 
//@des GET all users
//@Path: http://localhost:6000/user/users
router.get("/users",async(req,res)=>{
  try {
      const result= await User.find()
      res.send({response:result, message:"Getting Users successfully "}) 
  } catch (error) {
    res.status(400).send({message:"can not get users"}); 
  }
  })
  
   //@Method DELETE
//@des delete one user by id
//@Path: http://localhost:6000/delete/:id
//@Params id
router.delete("/deleteuser/:id",async(req,res)=>{
  try {
    const result = await User.deleteOne({_id:req.params.id});
    result.n
    ?res.send ({reponse:"user deleted"}) 
    :res.send("There is no user with this id")
  } catch (error) {
    res.send("Not deleted")  
  }
})

module.exports = router;
