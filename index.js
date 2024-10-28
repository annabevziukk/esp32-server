const express = require('express');
const app = express();
const PORT = 5000;

// Для підтримки JSON-запитів
app.use(express.json());

// Маршрут для прийому даних від NFC
app.post('/nfc', (req, res) => {
    console.log('Received a request on /nfc'); // Ця строка допоможе перевірити, чи обробляється запит
    const data = req.body;
    console.log('Received data:', data);
    res.send(`Received data: ${JSON.stringify(data)}`);
});


// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
