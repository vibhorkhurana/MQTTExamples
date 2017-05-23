const mqtt = require('mqtt');
var conn_opts = {
    host : '127.0.0.1',
    port : 1883
};
var client = mqtt.connect(conn_opts);
client.on('connect',function(){
    console.log("Connected");
    client.subscribe('hello');
});
client.on('message',function(topic,message){
    console.log('got a message\ntopic: '+topic);
    console.log('payload: '+message);
});