const mqtt = require('mqtt');
var client = mqtt.connect("mqtt://127.0.0.1:1883");
// var timer = setInterval(function(){
//     client.publish('hello','my first message',function(){
//         client.end();
//     });
// },5000)
client.on('connect',function(){
    setInterval(function(){
    client.publish('hello','my first message');
},5000)
})
// client.on('connect',function(){
//     client.publish('hello','my first message',function(){
//         client.end();
//     });
// });