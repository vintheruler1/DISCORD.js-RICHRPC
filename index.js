const RPC = require('discord-rpc');
const client = new RPC.Client({
    transport: 'ipc'
});

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "details",
            state: "state",
            timestamps: {
                start: Date.now()
            },
            assets: {
                large_image: "large_image", // large image key from developer portal > rich presence > art assets
                large_text: "image_text"
            },
            buttons: [
                { label: "Label1", url: "https://youtube.com" },
                { label: "Label2", url: "https://discord.com/tos" }
            ]
        }
    });
});

client.login({
    clientId: 'clientID', // put the client id from the dev portal here
    clientSecret: 'clientSecret' // put the client secret from the dev portal here
});
console.log('Ready to rock and roll!')
