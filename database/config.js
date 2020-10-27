const mongoose = require('mongoose');
// require('dotenv').config();
const dbConecction = async() => {

    try {
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('DB Online');
    } catch (error) {
        console.log(error);
        throw new Error('error al conectar la base de datos');
    }
}

module.exports = {
    dbConecction
}