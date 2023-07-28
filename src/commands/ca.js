const camessage = 
`
Holy contract address:
\`0xA942Ba6E9Aab4b67d73572fb0e3BD5D25d5414ED\`
`; 
module.exports = (bot) => {
    bot.command("ca", (ctx) => {
        let input = ctx.message.text;
        let inputArray = input.split(" ");
    
        if (inputArray.length == 1) { 
           bot.telegram.sendMessage(ctx.from.id, camessage, {
               parse_mode: "markdown"
           })
        } else {
            inputArray.shift(); 
            message = inputArray.join(" ");
            ctx.reply(`pls use only the ca command`);
        }
        //reply message to user
    })

    
}