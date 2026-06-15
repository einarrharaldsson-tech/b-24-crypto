const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
    // Разрешаем любые типы запросов от Битрикс24 (POST, GET, OPTIONS)
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    // Читаем наш HTML-интерфейс и отдаем его браузеру пользователя
    const filePath = path.join(process.cwd(), 'app.html');
    const htmlContent = fs.readFileSync(filePath, 'utf8');
    
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    return res.status(200).send(htmlContent);
};
