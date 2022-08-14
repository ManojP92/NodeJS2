function log(req,res,next){
    console.log('Authenticating the request....!');
    next();
}
module.exports= log;
