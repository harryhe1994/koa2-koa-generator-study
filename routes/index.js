const router = require('koa-router')()
const cardService = require('../service/cardService');


router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
    ctx.response.body  = await cardService.findAllCard(ctx);
})

module.exports = router
