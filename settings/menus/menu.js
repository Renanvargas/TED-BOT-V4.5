const config = require("../config.json");

//  Função para gerar data/hora formatada
function getCurrentDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString("pt-BR");
    const time = now.toLocaleTimeString("pt-BR");
    return { date, time };
}

//  MENU DE vemon — ${config.NomeDoBot}
function generateMenu() {
    const { date, time } = getCurrentDateTime();

    return `
👹VEMON BOT👹
╔═══📝∘◦👤◦∘📝═══╗
       *${config.NomeDoBot}*
╚═══📝∘◦👤◦∘📝═══╝

🗓️ _${date}_
🕰️ _${time}_
👑 _Dono: ${config.NickDono}_

┏━━━👊🏻⌬👤━━━┓
┃     *🇹🇳 MENU DE VEMON🇹🇳 *
┣━━ 🎄 *PRINCIPAL*
┃ 〽️ ${config.prefix}menuadm
┃ 🕹️ ${config.prefix}brincadeiras
┃ 📱${config.prefix}menulogos

┣━━「 🔔 *SISTEMA* 」
┃  * ${config.prefix}ping
┃  * ${config.prefix}status
┃  * ${config.prefix}stats
┃  * ${config.prefix}roubar
┃  * ${config.prefix}revelar
┃  * ${config.prefix}sticker
┃  * ${config.prefix}toimg

┣━━「 🎶 *CONVERSÃO MÁGICA* 」
┃    ${config.prefix}totext
┃    ${config.prefix}ptvmsg
┃    ${config.prefix}attp
┃    ${config.prefix}ttp
┃    ${config.prefix}gerarlink
┃    ${config.prefix}rvisu

┣━━「 📥 *DOWNLOADS FESTIVOS* 」
┃    ${config.prefix}tomp3
┃    ${config.prefix}shazam
┃    ${config.prefix}play
┃    ${config.prefix}play2
┃    ${config.prefix}play3
┃    ${config.prefix}sc
┃    ${config.prefix}ttk
┃    ${config.prefix}ttk2
┃    ${config.prefix}tiktok
┃    ${config.prefix}tiktok2
┃    ${config.prefix}kwai
┃    ${config.prefix}instamp4
┃    ${config.prefix}instamp3
┃    ${config.prefix}Pintemp4
┃    ${config.prefix}Pintemp3
┃    ${config.prefix}Pinterest
┃    ${config.prefix}Pinterest2

┣━━「 👤 *PERFIL DE VEMON* 」
┃     ${config.prefix}perfil

┗━━━👹⌬👹━━━┛

✨ Que a magia do VEMON ilumine cada comando seu! 
`;
}

module.exports = generateMenu;
