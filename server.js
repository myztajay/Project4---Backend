var express = require('express'),
    app = express();

var port = process.env.PORT || 3000;

// listening Port
app.listen(3000, ()=>{
  console.log('Example app listen on port 3000')
});
//root
app.get("/api", (req, res)=>{
  res.send('Hello World')
});
