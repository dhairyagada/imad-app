var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));


var articles{
    articleOne={
                      title:  'Article One | Dhairya Gada',
                      heading: 'First Article',
                      date: 'August 15 2017',
                      content: ` <p>
                                    Hello Friends this is my first article on this webapp.
                                </p>
                                `
                };
    artricleTwo={
        title:  'Article Two | Dhairya Gada',
                      heading: 'Second Article',
                      date: 'August 15 2017',
                      content: ` <p>
                                    Hello Friends this is my second article on this webapp.
                                </p>
                                `
    };
} ; 

function createTemplate(data){
var title=data.title;
var heading=data.heading;
var date=data.date;
var content=data.content;
var htmlTemplate =`
<html>
<head>
   <title>${title}</title>
   <link href="/ui/style.css" rel="stylesheet" />
   <style>
       

   </style>
</head>
<body>
    <div class="container">
        <div><a href="/">Home</a></div>
        <hr/>
        <h3>${heading}</h3>
        <div>${date}</div>
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

app.get('/article-one',function(req,res){
res.send(createTemplate(articleOne));
})
    


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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
