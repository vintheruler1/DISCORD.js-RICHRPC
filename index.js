const RPC = require('discord-rpc');
const client = new RPC.Client({
    transport: 'ipc'
});

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: process.pid,
        activity: {
            details: "Watching over 13 servers and 763 members.",
            state: "Developing...",
            timestamps: {
                start: Date.now()
            },
            assets: {
                large_image: "v5_final_dpyemperor_madebyadobe_", // large image key from developer portal > rich presence > art assets
                large_text: "Emperor Image"
            },
            buttons: [
                { label: "Invite Link", url: "https://dsc.gg/invite-emperor" },
                { label: "Support Server", url: "https://discord.gg/WFfKT9Kazj" }
            ]
        }
    });
});

client.login({
    clientId: '912408125942951976', // put the client id from the dev portal here
    clientSecret: '9P2uJM5EEp_EQtQBpTirP8Tqb6ONCmwO' // put the client secret from the dev portal here
});
console.log('Ready to rock and roll!')