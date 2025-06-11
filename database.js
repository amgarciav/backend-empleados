const mongoose = require('mongoose');
const URI = 'mongodb+srv://amgarciav:ZTOxc8vvnSxfPTtJ@prueba3.okrwid5.mongodb.net/lunes?retryWrites=true&w=majority&appName=prueba3';
mongoose.connect(URI)
    .then(db => console.log('Base de datos conectada'))
    .catch(err => console.error(err));
module.exports = mongoose;