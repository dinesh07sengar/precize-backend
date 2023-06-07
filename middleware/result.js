
const result = (req,res,next)=>{
    let{sat_score}= req.body;
    if(sat_score>30){
        req.body.passed = "pass";
        next()
    }
    else{
        req.body.passed = "fail";
        next()
    }
}
module.exports={ result}