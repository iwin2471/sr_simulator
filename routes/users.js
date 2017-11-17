module.exports = (router, Users)=>{
  router.get('/', async (req, res)=>{
    const users = await Users.find();
    return res.status(200).json(users);
  })
  .get('/state', (req, res)=>{
    console.log(req.session.passport.user);
    return res.status(200).json(req.session.passport.user);
  })

  .post('/user', (req, res)=>{

  })

  .put('/:id', (req, res)=>{

  })

  .delete('/:id', (req, res)=>{

  })

  return router;
}
