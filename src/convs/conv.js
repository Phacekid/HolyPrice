const axios = require('axios');

module.exports = (bot) => {
bot.command("convert", (ctx) => {
    getData();
    async function getData(){
        let input = ctx.message.text;
        console.log('input:', input)
        input = input.toLowerCase()
        let inputArray = input.split(" "); 
        
        console.log('inputArray', inputArray)

        if (inputArray.length == 1) { 
           let message = "pls put other info after convert";
            ctx.reply(message);
        }
        else {
            
            try{
                let holyRes = await axios.get('https://api.dexscreener.com/latest/dex/pairs/smartbch/0x6c38a56899109fc549649e6d7af8e3ca57c2bb46');
                let lawRes = await axios.get('https://api.dexscreener.com/latest/dex/pairs/smartbch/0x54aa3b2250a0e1f9852b4a489fe1c20e7c71fd88');
                let holy = holyRes.data.pair.priceUsd;
                let law = lawRes.data.pair.priceUsd;
                console.log('holy', holy)
                console.log('law', law)
                let allInfo;
                inputArray.shift(); 
                console.log('new input', inputArray)
                if(parseInt(inputArray[0])) {
                    console.log('we can conv from here')
                    if((inputArray[1] == 'holy') && (inputArray[2] == 'law')) {
                        let convert1 = (holy / law)
                        let convert2 = convert1 * inputArray[0];
                        let convert3 = convert2.toFixed(4);
                        allInfo = `${inputArray[0]} ${inputArray[1].toUpperCase()} is equal to ${convert3 } ${inputArray[2].toUpperCase()}`                      
                    }
                    if((inputArray[1] == 'law') && (inputArray[2] == 'holy')) {
                        let convert1 = (law / holy)
                        let convert2 = convert1 * inputArray[0];
                        let convert3 = convert2.toFixed(4);
                        allInfo = `${inputArray[0]} ${inputArray[1].toUpperCase()} is equal to ${convert3 } ${inputArray[2].toUpperCase()}`                        
                    }
                    bot.telegram.sendMessage(ctx.chat.id, allInfo, {
                        parse_mode: "markdown"
                    })
                } else {
                    console.log('input a number after the convert')
                }
            }catch(err){
                console.log(err)
            }
        }
    }
})
}