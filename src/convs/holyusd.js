const axios = require('axios');

module.exports = (bot) => {
bot.command(["HolyUsd", "holyusd", "HOLYUSD"], (ctx) => {
    getData();
    async function getData(){
        let input = ctx.message.text;
        let inputArray = input.split(" "); 
        let message = ""; 
    
        if (inputArray.length == 1) { 
            message = "pls put a number after the holyusd to get your desired information";
            ctx.reply(message);
        }
        else {
            inputArray.shift(); 
            message = inputArray.join(" ");
            try{
                let holyRes = await axios.get('https://api.dexscreener.com/latest/dex/pairs/smartbch/0x6c38a56899109fc549649e6d7af8e3ca57c2bb46');
               // let lawRes = await axios.get('https://api.dexscreener.com/latest/dex/pairs/smartbch/0x54aa3b2250a0e1f9852b4a489fe1c20e7c71fd88');
                //console.log(res);
                let holyUsd = holyRes.data.pair.priceUsd;
                //let lawUsd = lawRes.data.pair.priceUsd;
                let convert = (holyUsd * message) ;
                let converted = convert.toFixed(4);
    
                let allInfo = 
`
${message} HOLY = $${converted}
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