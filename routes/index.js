module.exports = (router)=>{
  router.get('/', async function(req, res, next) {
    await res.render('home');
  })

  return router;
}
