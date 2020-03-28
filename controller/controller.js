module.exports={
    home:(req,res)=>{
    //    res.render('index')
        if(req.cookies.user){
            message=req.cookies.user
        }
        else{
            message="No cookie set"
        }
        res.render('index',{msg:message})
       
    },

    create:(req,res)=>{
        res.render('create')
    },

    setCookie:(req,res)=>{

        let data=req.body.user;

        res.cookie('user',data,{expire:Date.now()})
        res.status(200).send("New cookie creation successful <a href='/'>Retrn Home</a>")

    },

    clear:(req,res)=>{
        res.clearCookie('user')
        res.status(200).send("Cookie cleared successfully <a href='/'>Return Home </a>")
    }


}