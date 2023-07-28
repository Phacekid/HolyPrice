const axios = require('axios');

module.exports = (bot) => {
bot.command(["UsdHoly", "usdholy", "USDHOLY"], (ctx) => {
    getData();
    async function getData(){
        let input = ctx.message.text;
        let inputArray = input.split(" "); 
        let message = ""; 
    
        if (inputArray.length == 1) { 
            message = "pls put a number after the usdholy to get your desired information";
            ctx.reply(message);
        }
        else {
            inputArray.shift(); 
            message = inputArray.join(" ");
            try{
                let holyRes = await axios.get('https://api.dexscreener.com/latest/dex/pairs/smartbch/0x6c38a56899109fc549649e6d7af8e3ca57c2bb46');
                let holyUsd = holyRes.data.pair.priceUsd;
                let convert = (message / holyUsd) ;
                let converted = convert.toFixed(2);
    
                let allInfo = 
`
$${message} = ${converted} HOLY
`
                bot.telegram.sendMessage(ctx.chat.id, allInfo, {
                    parse_mode: "markdown"
                })
            }catch(err){
            console.log(err)
            }
        }
    }
})
}