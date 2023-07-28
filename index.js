require('dotenv').config();

const Telegraf = require('telegraf');
const axios = require('axios');

const bot = new Telegraf(process.env.TOKEN);

const caCommand = require('./src/commands/ca');
caCommand(bot);
const dlinkCommand = require('./src/commands/dlink');
dlinkCommand(bot);
const infoCommand = require('./src/commands/info');
infoCommand(bot);
const startCommand = require('./src/commands/start');
startCommand(bot);

const holyInfo = require('./src/convs/holy');
holyInfo(bot);
const holyusdInfo = require('./src/convs/holyusd');
holyusdInfo(bot);
const usdholyInfo = require('./src/convs/usdholy');
usdholyInfo(bot);
const holylawInfo = require('./src/convs/holylaw');
holylawInfo(bot);
const lawholyInfo = require('./src/convs/lawholy');
lawholyInfo(bot);
const convInfo = require('./src/convs/conv');
convInfo(bot);


exports.handler = (event, context, callback) => {
    const tmp = JSON.parse(event.body); // get data passed to us
    bot.handleUpdate(tmp); // make Telegraf process that data
    return callback(null, { //return something for webhook, so it doesn't
        statusCode: 200,
        body: '',
    });
};

// bot.launch();