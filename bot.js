console.log("Kdo ti jebal otca");

require("dotenv").config();

const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.BOTTOKEN);

client.on('ready', readyDiscord);

function readyDiscord() {
    console.log('kokotko'); 
}

const replies = [
    '8D',
    '8==D',
    '8=D',
    '8===D',
    '8====D',
    '8========D',
    '8=============D'
]

client.on('message', gotMessage);

function gotMessage(msg) {
    console.log(msg.content);
    if (msg.content == '*pucka') {
        const index = Math.floor(Math.random() * replies.length);
        msg.channel.send(replies[index]);
    }

}