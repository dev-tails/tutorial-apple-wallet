import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();

app.get('/', (req, res) => {
    res.sendFile('index.html', {
        root: './'
    });
});

app.get('/ticket.pkpass', (req, res) => {
    const filePath = 'ticket.pkpass';

    res.setHeader('Content-Type', 'application/vnd.apple.pkpass');
    res.setHeader('Content-Disposition', 'attachment; filename="ticket.pkpass"');

    fs.createReadStream(filePath).pipe(res);
});

app.listen(8000, () => {
    console.log('Server is running on port 3000');
});