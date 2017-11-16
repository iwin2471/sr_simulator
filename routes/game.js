module.exports = (router, Users) =>{
  router.get('/episode1', async (req, res)=>{
    await res.render('episode1');
  });
  router.get('/episode2', async (req, res)=>{
    await res.render('episode2');
  });
  router.get('/episode3', async (req, res)=>{
    await res.render('episode3');
  });
  router.get('/episode4', async (req, res)=>{
    await res.render('episode4');
  });
  return router;
}
