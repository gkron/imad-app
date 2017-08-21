var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articals ={
'artical-one':{
    title:'Artical One | Ganesh Kumar',
    heading:'Aritical One',
    date:'Aug 18, 2017',
    content: `<p>
            This is contnet of my first artical Where i am learning new things & enjoyging it.This is contnet of my first artical Where i am learning new things & enjoyging it.This is contnet of my first artical Where i am learning new things & enjoyging it.
        </p>
                <p>
            This is contnet of my first artical Where i am learning new things & enjoyging it.This is contnet of my first artical Where i am learning new things & enjoyging it.This is contnet of my first artical Where i am learning new things & enjoyging it.
        </p>
                <p>
            This is contnet of my first artical Where i am learning new things & enjoyging it.This is contnet of my first artical Where i am learning new things & enjoyging it.This is contnet of my first artical Where i am learning new things & enjoyging it.
        </p>`
},
 'artical-two':{
    title:'Artical Two | Ganesh Kumar',
    heading:'Aritical Two',
    date:'Aug 19, 2017',
    content: `<p>
            This is contnet of my second artical Where i am exploring more
        </p>`
    
},
 'artical-three':{
    title:'Artical Three | Ganesh Kumar',
    heading:'Aritical One',
    date:'Aug 20, 2017',
    content: `<p>
            This is contnet of my Three artical Where i am enjoying it
        </p>`
}
};
function createTemplate(data){
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
var htmlTemplate=`
<html>
<head>
<title>
   ${title}
</title>
<meta name="viewport" content="width-device-width, initial-scale=1" />
<link href="/ui/style.css" rel="stylesheet" />
</head>
<body>
    <div class="container">
    <div>
        <a href="/">Home</a>
    </div>
    <hr/>
    <h3>
       ${heading}
    </h3>
    <div>
       ${date}
    </div>
    <div>
      ${content}
    </div>
    </div>
</body>
</html>
`;
 return htmlTemplate;

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articalName', function(req, res){
    var articalName=req.params.articalName;
   res.send(createTemplate(articals[articalName]));
});

app.get('/artical-two', function(req, res){
     res.sendFile(path.join(__dirname, 'ui', 'artical-two.html'));
});

app.get('/artical-three', function(req, res){
   res.sendFile(path.join(__dirname, 'ui', 'artical-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

