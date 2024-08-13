const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const templateRoutes = require('./routes/templates');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error conectando a MongoDB:', err));

app.use('/api/templates', templateRoutes);

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
