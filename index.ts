import * as revoltio from "https://deno.land/x/revoltio@v1.0.0/mod.ts";

const client = new Client()

client.on('ready', () => {
    console.log('Connected')
    console.log(client.user.username)
})

client.on('message', msg => {
    if (msg.content === '!ping') {
        msg.reply('Pong!')
    }
})

// Connect to Revolt API
client.login('qPsvDD8YrSJpJLB3xWJZnfgnWz9M89Nbt-ef2ZBqUBTlES6Z9Ppjg_61m0WVXDTe')

// for user accounts add this extra parameter
// client.login('revolt-token-here', 'user')
