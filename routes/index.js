module.exports = (router)=>{
  router.get('/',isAuth, async function(req, res, next) {
    await res.render('home');
  })

  return router;
}
