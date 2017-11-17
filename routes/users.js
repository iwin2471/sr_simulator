module.exports = (router, Users)=>{
  router.get('/', async (req, res)=>{
    const users = await Users.find();
    return res.status(200).json(users);
  })
  .get('/state', async (req, res)=>{
    const state = await Users.findOne(req.session.passport.user, {state: 1});
    return res.status(200).json(state);
  })
  .post('/state', async (req, res)=>{
    const state = req.body.state;
    if(!state) return res.status(400).json({message: "param missing"});
    const update_result = await Users.update(req.session.passport.user, {$set: {state: state}});

    if(update_result) res.status(200).json({message: "done"});
    else res.status(400).json({message: "somthing wrong"});
  })

  .post('/user', (req, res)=>{

  })

  .put('/:id', (req, res)=>{

  })

  .delete('/:id', (req, res)=>{

  })

  return router;
}
