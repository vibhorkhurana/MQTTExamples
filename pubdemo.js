const mqtt = require('mqtt');
var client = mqtt.connect("mqtt://127.0.0.1:1883");
client.on('connect',function(){
    client.publish('hello','my first message',function(){
        client.end();
    });
});