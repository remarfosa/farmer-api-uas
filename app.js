
var express = require('express');
var cookieParser = require('cookie-parser');
const auth = require('./middleware/auth');

const { sequelize } = require('./models');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var karakteristikLahanRoutes = require('./routes/karakteristikLahanRoutes');
var kriteriaLahanRoutes = require('./routes/kriteriaLahanRoutes');
var logAktivitasRoutes = require('./routes/logAktivitasRoutes');
var lokasiRoutes = require('./routes/lokasiRoutes');
var penggunaRoutes = require('./routes/penggunaRoutes');
var rekomendasiRoutes = require('./routes/rekomendasiRoutes');
var tanamanRoutes = require('./routes/tanamanRoutes');

var app = express();
app.use(express.json());
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/karakteristik-lahan', auth, karakteristikLahanRoutes);
app.use('/api/kriteria-lahan', auth,kriteriaLahanRoutes);
app.use('/api/log-aktivitas', auth,logAktivitasRoutes);
app.use('/api/lokasi',auth, lokasiRoutes);
app.use('/api/pengguna',  penggunaRoutes);
app.use('/api/rekomendasi',auth, rekomendasiRoutes);
app.use('/api/tanaman',auth, tanamanRoutes);
// Sync database and start server
sequelize.sync({ force: false }) // force: false to avoid overwriting data
  .then(() => {
    console.log('Database synchronized');
    const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error synchronizing database:', err);
  });

require('dotenv').config();
module.exports = app;