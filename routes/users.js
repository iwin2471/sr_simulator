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

    const update_result = await Users.update(req.user, {$set: {state: test}});

    if(update_result) res.status(200).json({message: "done"});
    else res.status(400).json({message: "somthing wrong"});
  })

  .post('/health', (req, res)=>{
    const update_result = await Users.update(req.user, {$inc: {state: {health: req.body.health}}});
    if(update_result) res.status(200).json({message: "done"});
  })

  .post('/coding', (req, res)=>{
    const update_result = await Users.update(req.user, {$inc: {state: {coding: req.body.coding}}});
    if(update_result) res.status(200).json({message: "done"});
  })

  .post('/dating', (req, res)=>{
    const update_result = await Users.update(req.user, {$inc: {state: {dating: req.body.dating}}});
    if(update_result) res.status(200).json({message: "done"});
  })

  .post('/happiness', (req, res)=>{
    const update_result = await Users.update(req.user, {$inc: {state: {happiness: req.body.happiness}}});
    if(update_result) res.status(200).json({message: "done"});
  })
  return router;
}
