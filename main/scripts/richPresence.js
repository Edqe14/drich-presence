const RPC = require("discord-rpc");
let client;

function set() {
    const id = document.getElementById('client'),
          state = document.getElementById('state'),
          details = document.getElementById('details'),
          largeImageKey = document.getElementById('largeKey'),
          smallImageKey = document.getElementById('smallKey'),
          largeImageText = document.getElementById('largeText'),
          smallImageText = document.getElementById('smallText');

    if(!id || id.value.length <= 0) return;

    client = new RPC.Client({ transport: 'ipc' });
    client.login({ clientId: id.value });
    
    client.once('ready', ()=>{
        let presence = {
            instance: true
        };
        if(state && state.value.length > 0) presence.state = state.value;
        if(details && details.value.length > 0) presence.details = details.value;
        if(largeImageKey && largeImageKey.value.length > 0) presence.largeImageKey = largeImageKey.value;
        if(smallImageKey && smallImageKey.value.length > 0) presence.smallImageKey = smallImageKey.value;
        if(largeImageText && largeImageText.value.length > 0) presence.largeImageText = largeImageText.value;
        if(smallImageText && smallImageText.value.length > 0) presence.smallImageText = smallImageText.value;

        client.setActivity(presence);
    });
};

function clear() {
    if(!client) return;
    client.clearActivity();
}