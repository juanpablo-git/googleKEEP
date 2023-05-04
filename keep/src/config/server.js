import Koa from 'koa';
const app = new Koa();
app.use(async (ctx,next)=>{
    console.log(ctx)
    ctx.response.body  = "teste"
})
app.listen('1234')