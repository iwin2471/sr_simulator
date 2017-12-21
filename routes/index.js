module.exports = (router)=>{
  router.get('/',isAuth, async function(req, res, next) {
    await res.redirect('/home.html');
  })

  return router;
}
