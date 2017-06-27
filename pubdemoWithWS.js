const mqtt = require('mqtt');
var client = mqtt.connect("ws://127.0.0.1:8883");
client.on('connect',function(){
    client.publish('testtopic/1','my first message',function(){
        client.end();
    });
});