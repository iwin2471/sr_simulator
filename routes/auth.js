module.exports = (router, Users, passport) =>{
  router.get('/signin', async (req,res)=>{
    return res.redirect('/login.html');
  });
  router.post('/signup', async (req, res) => {
      const data = req.body;
      const new_user = new Users(data);
      try{
        var result = await new_user.save();
      }catch(e){
        if(e instanceof user_duplicate) return res.status(409).json({message:"already exist"});
        if(e instanceof ValidationError) return res.status(400).json({message: e.message});
        if(e instanceof paramsError) return res.status(400).json({message: e.message});
      }
     return res.redirect('/');
  })

  .post('/signin', passport.authenticate('local', {successRedirect: '/'}), (req,res)=>{
     return res.redirect('/');
  })

  .get('/auto/:token', (req, res)=>{
     var params = ['token'];

     if(check_param(req.params, params)){
       const token = req.params.token;
       Users.findOne({token: token}, {_id: 0, passwd: 0},(err, user) =>{
         if(err) return res.status(500).send("DB error");
         if(user) return res.status(200).json({id: user.id, name: user.name, token: user.token});
         else return res.status(404).send("user not found");
       });
     }else{
       return res.status(400).send("param missing or null");
     }
  })

  .post('/logout', (req, res)=>{
    req.logout();
    return res.redirect('/');
  });

  return router;
}
