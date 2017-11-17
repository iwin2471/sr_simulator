module.exports = (router, Users, passport)=>{
  router.get('/', async (req, res)=>{
    const users = await Users.find();
    return res.status(200).json(users);
  })
  .get('/state', async (req, res)=>{
    return res.status(200).json(req.user.state);
  })
  .post('/state', async (req, res)=>{
    const state = req.body;
    if(!state) return res.status(400).json({message: "param missing"});
    var test = {
         day: state.day,
         hours: state.hours,
         statBarData:{
           happiness: state.happiness,
           coding: state.coding,
           dating: state.dating,
           health: state.health
       }
    };

    console.log(test);

    const update_result = await Users.update(req.session.passport.user, {$set: {state: test}});

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
