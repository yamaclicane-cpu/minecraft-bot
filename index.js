const mineflayer = require('mineflayer')

function createBot() {
    const bot = mineflayer.createBot({
        host: 'tybgrlcraft.falixsrv.me'tybgrlcraft.falixsrv.me,yaz
        port: 25565,               // Port numaran (genelde 25565)
        username: 'sunucusistemi',      // Botun adı
        version: '1.20.1'          // Sunucu sürümün neyse onu yaz
    })

    bot.on('login', () => console.log('Bot sunucuya girdi!'))
    
    // Bot ölürse veya atılırsa tekrar bağlanır
    bot.on('end', () => {
        console.log('Bağlantı kesildi, tekrar bağlanılıyor...')
        setTimeout(createBot, 5000)
    })
    
    bot.on('error', err => console.log('Hata:', err))
}

createBot()
