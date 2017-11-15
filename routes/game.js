module.exports = (router, Users) =>{
  router.get('/episode1', async (req, res)=>{
    await res.render('episode1');
  });
  return router;
}
