const express=require('express')
const app=express()
const bodyParser=require('body-parser')
const PORT=5700;
const cookie=require('cookie-parser')

const route=require('./router/router')
app.use(cookie())
app.set('views','./views')
app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended:true}))
app.use('/',route)


app.listen(PORT,function(){
    console.log(`The Server is up and runnig at PORT ${PORT}`)
})