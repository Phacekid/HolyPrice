const axios = require('axios');

module.exports = (bot) => {
bot.command(["HolyPrice", "holyprice", "HOLYPRICE"], (ctx) => {
    getData();
    async function getData(){
        try{
            let holyRes = await axios.get('https://api.dexscreener.com/latest/dex/pairs/smartbch/0x6c38a56899109fc549649e6d7af8e3ca57c2bb46');
            let lawRes = await axios.get('https://api.dexscreener.com/latest/dex/pairs/smartbch/0x54aa3b2250a0e1f9852b4a489fe1c20e7c71fd88');
            //console.log(res);
            let holyUsd = holyRes.data.pair.priceUsd;
            let lawUsd = lawRes.data.pair.priceUsd;
            let convert = lawUsd / holyUsd;
            let converted = convert.toFixed(2);

            let allInfo = 
`
*HOLY TOKEN*
 *USD*: $${holyUsd}
 
 1 law is equal to approx ${converted} Holy

`

            bot.telegram.sendMessage(ctx.chat.id, allInfo, {
                parse_mode: "markdown"
            })
        }catch(err){
        console.log(err)
        }
    }
})
}