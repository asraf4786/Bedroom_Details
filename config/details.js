const mongoose = require('mongoose');

const detailSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    }

})


const Detail = mongoose.model('Detail', detailSchema);

module.exports = Detail;