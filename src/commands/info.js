const infomessage = 
`
*Additional info can be found here*
- Bot designed by @PhaceSys
- The Bot uses Dex Screener api
`; 
module.exports = (bot) => {
    bot.command("info", (ctx) => {
        let input = ctx.message.text;
        let inputArray = input.split(" ");
    
        if (inputArray.length == 1) { 
           bot.telegram.sendMessage(ctx.from.id, infomessage, {
               parse_mode: "markdown"
           })
        } else {
            inputArray.shift(); 
            message = inputArray.join(" ");
            ctx.reply(`pls use only the info command`);
        }
        //reply message to user
    })

    
}