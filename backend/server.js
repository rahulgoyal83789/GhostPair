import "dotenv/config.js";
import http from 'http';
import app from './app.js';

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});
app.use((req, res) => {
    res.status(404).send('Route not found');
});