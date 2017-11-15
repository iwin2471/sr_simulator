module.exports = (router)=>{
  router.get('/', async function(req, res, next) {
    await res.render('tableTennis');
  })

  return router;
}
