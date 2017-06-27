import paho.mqtt.client as mqtt
fs = open("/sys/class/thermal/thermal_zone2/temp",'r')
#print fs.read()
host = "127.0.0.1"
topic = "PyPaho/temperature"
port = 1883
keepalive = 30
bind_addr = ""
mqtt_client = mqtt.Client(client_id="", clean_session=True, userdata=None, protocol=mqtt.MQTTv311)
mqtt_client.connect_async(host, port, keepalive, bind_addr)
mqtt_client.loop_start()
prev = fs.read()
while True:
    fs.seek(0)
    current = fs.read()
    if current > prev:
        prev = current
        temperature = current
        mqtt_client.publish(topic,temperature)
mqtt_client.disconnect






