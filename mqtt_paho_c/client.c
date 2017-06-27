#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include"/usr/local/include/MQTTClient.h"
#define ADDRESS "tcp://localhost:1883"
#define CLIENTID "publisher"
#define TOPIC "hello"
#define PAYLOAD "First Message"
#define QOS 0
#define TIMEOUT 10000L

int main()
{
    char ch='y',eater;
    MQTTClient client;
    MQTTClient_connectOptions conn_opts = MQTTClient_connectOptions_initializer;
    MQTTClient_message pubmsg = MQTTClient_message_initializer;
    MQTTClient_deliveryToken token;
    int rc;
    char *payload = malloc(1);
    char *topic = malloc(1);
    MQTTClient_create(&client, ADDRESS, CLIENTID,
        MQTTCLIENT_PERSISTENCE_NONE, NULL);
            conn_opts.keepAliveInterval = 20;
    conn_opts.cleansession = 1;

    printf("Enter topic \n");
    scanf("%s",topic);

    if ((rc = MQTTClient_connect(client, &conn_opts)) != MQTTCLIENT_SUCCESS)
    {
        printf("Failed to connect, return code %d\n", rc);
        exit(EXIT_FAILURE);
    }
    while(ch=='y'||ch=='Y')
    {
        printf("Enter Payload \n");
        scanf("%s",payload);
        
        pubmsg.payload = payload;
        pubmsg.payloadlen = strlen(payload);
        pubmsg.qos = QOS;
        pubmsg.retained = 0;
        MQTTClient_publishMessage(client, topic, &pubmsg, &token);
        rc = MQTTClient_waitForCompletion(client, token, TIMEOUT);
        printf("\n Message delivered\n", token);
        printf("\n Send another message: ");
        scanf("%c",&eater);
        scanf("%c",&ch);
    }
   
    // printf("Waiting for up to %d seconds for publication of %s\n"
    //         "on topic %s for client with ClientID: %s\n",
    //         (int)(TIMEOUT/1000), PAYLOAD, TOPIC, CLIENTID);
    MQTTClient_disconnect(client, 10000);
    MQTTClient_destroy(&client);
    return rc;
}