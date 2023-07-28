const dlinkmessage = 
`
https://dexscreener.com/smartbch/
`; 

module.exports = (bot) => {
    bot.command("dlink", (ctx) => {
        let input = ctx.message.text;
        let inputArray = input.split(" ");
    
        if (inputArray.length == 1) { 
           bot.telegram.sendMessage(ctx.from.id, dlinkmessage)
        } else {
            inputArray.shift(); 
            message = inputArray.join(" ");
            ctx.reply(`pls use only the dlink command`);
        }
        //reply message to user
    })

    
}