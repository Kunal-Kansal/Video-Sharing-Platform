const router = require('express').Router();
const User = require('./SchemaModel/UserSchema')

router.post("/register",(req,res)=>{
    const{name,email,phone,profession,password} = req.body
    User.create({
        name:name,
        email:email,
        phone:phone,
        profession:profession,
        password:password
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

router.post("/SignIn", async function(req, res){
    try {
        // check if the user exists
        const user = await User.findOne({ email: req.body.email });
        if (user) {
          //check if password matches
          const result = req.body.password === user.password;
          if (result) {
            res.render("Aceess granted");
          } else {
            res.status(400).json({ error: "password doesn't match" });
          }
        } else {
          res.status(400).json({ error: "User doesn't exist" });
        }
      } catch (error) {
        res.status(400).json({ error });
      }
});


// 
// floating window ui