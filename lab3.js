var connect = require('connect');
var url = require('url');

var app = connect();

var calculate =function(req,res,next)
{

    var querystring = url.parse(req.url,true).query;
    var x= querystring.x;
    var y= querystring.y;
    var method=querystring.method;

    if(method == "add") {
        var result = parseInt(x) + parseInt(y);
        res.end(x + ' + ' + y + '=' + result);
    }
    else if(method == "subtract")
    {
        var result = parseInt(x) - parseInt(y);
        res.end(x + '-' + y + '=' +result);
    }
    else if(method == "multiply")
    {
        var result = parseInt(x) * parseInt(y);
        res.end(x + '*' + y + '=' + result)
    }
    else if(method == "divide")
    {
        var result = parseInt(x) /parseInt(y);
        res.end(x + '/' + y + '=' + result)
    }
}
app.use('/calculate',calculate);
app.listen(3000);
console.log('Connect running on port 3000');