var mqtt = require('mqtt');
var client = mqtt.connect("mqtt://127.0.0.1:1883");
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
client.on('connect',function(){
    client.publish('hello','message with options',conn_options,function(){
        client.end();
  });
});