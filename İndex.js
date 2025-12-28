const mineflayer = require('mineflayer')

function createBot() {
    const bot = mineflayer.createBot({
        host: 'tybgrlcraft.falixsrv.me', // Falix'ten aldığın IP
        port: 414124,               // Port numaran
        username: 'AFK_Botu_724',
        version: '1.21.11'          // Senin sürümün
    })

    bot.on('login', () => {
        console.log('Bot sunucuya başarıyla giriş yaptı!')
        // Eğer sunucuda şifre varsa alt satırı kullan:
        // bot.chat('/login SIFRENIZ') 
    })

    // Bot ölürse veya sunucu kapanırsa tekrar bağlanmayı dener
    bot.on('end', () => {
        console.log('Bağlantı koptu, 10 saniye sonra tekrar denenecek...')
        setTimeout(createBot, 10000)
    })

    bot.on('error', (err) => {
        console.log('Bir hata oluştu:', err.message)
    })

    // Botun sunucuda kalması için arada bir mesaj atmasını sağlayabilirsin
    setInterval(() => {
        if (bot.entity) {
            bot.chat('Ben buradayım, sunucuyu kapatma!');
        }
    }, 300000); // 5 dakikada bir mesaj atar
}

createBot()
