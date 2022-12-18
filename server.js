var express = require('express');


///Create app Srever

var app = express();
const PORT = process.evn.PORT || 7070;

app.use(function(req,res,next){
  if (req.headers['x-forwarded-proto']==='http') {
    next();
  }else {
    res.redirect('http://'+ req.hostname +req.url);
  }
});


app.use(express.static('public'));

app.listen(PORT,function(){
  console.log("Express server is up on port: "+PORT);
});
