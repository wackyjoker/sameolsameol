const express = require('express'),
      app     = express(),
      path 	  = require('path'),
      favicon = require('serve-favicon'),
      publicPath= path.join(__dirname,'..',"public");


      app.use(express.static(publicPath));
      app.use(favicon(path.join(__dirname, '../public/images', 'eric.ico')));


      app.get('*',(req,res)=>{
          res.sendFile(path.join(publicPath,'index.html'));
      });


      app.listen(process.env.PORT || 3000, (err)=>{
        if(err){
            console.log(err);
                } else {
        console.log('Server Started at 3000');
                        }
        });