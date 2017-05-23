const mqtt = require('mqtt');
var conn_options = {
    host : 'localhost',
    port : 1883,
    protocolId : 'MQTT',
    clean : true,
    clientId : 'pubdemo.1234',
    will : {
        topic : 'killed',
        payload : 'got terminated'
    }
}
var client = mqtt.connect(conn_options);
client.on('connect',function(){
    console.log("Connected");
    client.subscribe('hello');
});
client.on('message',function(topic,message){
    console.log('got a message\ntopic: '+topic);
    console.log('payload: '+message);
});