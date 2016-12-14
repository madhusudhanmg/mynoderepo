var request = require('request');
var url =
'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=f33d858ffbb4cff210214629366d0bdf';
 
module.exports = function (callback) {
request({
    url: url,
    json: true
}, function (error, response, body){
if (error) {
console.log('Unable to fetch weather');
} else {
//console.log(JSCON.stringify(body, null, 4));
//It's 77.77 in Philadelphia!
console.log('It\'s' +body.main.temp + ' in ' + body.name + '!');
}
});
}