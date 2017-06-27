import paho.mqtt.client as mqtt

host = "127.0.0.1"
port = 1883
keepalive = 30
bind_addr = ""  
topic = "PyPaho/temperature"
def on_connect(client,userdata,flags,rc):
    print "Connected with return Code "+str(rc)
    client.subscribe(topic)

def on_message(client,userdata,message):
    print message.topic
    print str(message.payload)


mqtt_client = mqtt.Client("",True,None,mqtt.MQTTv311)
mqtt_client.on_connect = on_connect
mqtt_client.on_message = on_message
mqtt_client.connect_async(host,port,60,bind_addr)
mqtt_client.loop_forever()