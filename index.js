const mineflayer = require('mineflayer')
const http = require('http')

// --- RENDER UYANIK TUTMA KODU ---
// Render ücretsiz planlarda bu kısım olmazsa bot 15 dakika sonra kapanır.
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Bot uyanik ve sunucuda!\n');
}).listen(process.env.PORT || 3000);

console.log('Web sunucusu Render için hazırlandı.');

// --- MINECRAFT AFK BOT KODU ---
function createBot() {
    const bot = mineflayer.createBot({
        host: 'tybgrlcraft.falixsrv.me', // Senin sunucu IP'n
        port: 41124,                    // Senin portun
        username: 'AFK_Botu_724',       // Botun adı
        version: '1.21.11'              // Hata aldığımız sürümü düzelttik
    })

    bot.on('login', () => {
        console.log('Bot sunucuya başarıyla giriş yaptı!');
    })

    // Bot sunucudan atılırsa veya sunucu kapanırsa 10 saniye sonra tekrar dener
    bot.on('end', () => {
        console.log('Bağlantı koptu, 10 saniye sonra tekrar denenecek...');
        setTimeout(createBot, 10000);
    })

    bot.on('error', (err) => {
        console.log('Bir hata oluştu:', err.message);
    })

    // Sunucuda kalması için 5 dakikada bir mesaj atar
    setInterval(() => {
        if (bot.entity) {
            bot.chat('Ben buradayım, sunucuyu kapatma!');
        }
    }, 300000);
}

createBot();
