const router = require('express').Router();
const User = require('./SchemaModel/UserSchema')

router.post("/register",(req,res)=>{
    const{name,email,phone,profession,password,confirmpassword} = req.body
    User.create({
        name:name,
        email:email,
        phone:phone,
        profession:profession,
        password:password,
        confirmpassword:confirmpassword
    },(err,newUser)=>{
        if(err)res.send(err)
        else{
            newUser.save()
            res.json({
                status:"success",result: newUser
            })
        }
    })
})



router.post("/signIn",(req,res)=>{
    const{email,password} = req.body

})
// 
// floating window ui