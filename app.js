
const express = require('express');
const path = require('path');
const menuRoutes = require('./routes/menu.routes');

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', menuRoutes);

app.listen(PORT, () => {
  console.log(`Kopi Ruang berjalan di http://localhost:${PORT}`);
});
