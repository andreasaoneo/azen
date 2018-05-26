const Discord = require(`discord.js`);

exports.run = async (client, message, args, level) => {
  const friendly = client.config.permLevels.find(l => l.level === level).name;
  client.send(
    Discord,
    message.channel,
    `Permissions Level:`,
    `Your permission level is: ${level} - ${friendly}`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [`rank`, `level`, `myrank`, `mylevel`, `rnk`],
  permLevel: `User`,
  secret: false
};

exports.help = {
  name: `rank`,
  category: `Miscelaneous`,
  description: `Tells you your permission level`,
  extendedDescription: `Tells you your permission level for the current message location.`,
  usage: `rank`
};
