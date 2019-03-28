/*jshint node:true*/
'use strict';

const client = require('ari-client');
const util = require('util');

console.log('=== before connect ===')

client.connect('http://ast:8088', 'asterisk', 'asterisk')
.then(ari => {
    console.log('=== connected ===')
    
    var channel = ari.Channel();
    
    channel.on('StasisStart', (event, channel) => {
        console.log('StasisStart')
    })
    
    channel.on('StasisEnd', (event, channel) => {
        console.log('StasisEnd')
    })
    
    channel.on('ChannelDtmfReceived', (event, channel) => {
        console.log('ChannelDtmfReceived')
    })

    // channel.originate({
    //     endpoint: 'PJSIP/1000',
    //     app: 'application',
    //     appArgs: 'dialed'
    // })
    // .then(channel => {
    //     console.log('channel created')
    // })
    // .catch(err => {
    //     console.error(err);
    //     throw err;
    // })

    ari.start('hello-world')

})
.catch(err => {
    console.error('ERROR:', err);
    throw err;
})
