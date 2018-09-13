const mongoose = require('mongoose');

const cardSchema = mongoose.Schema(
    {
        // type: Number,
        // comment: String,
        // order: String,
        // isEditCard: Boolean,
        // createTime: Date
        name: String
    },
    {
        collection: 'card'
    }
);

let Card = mongoose.model('Card', cardSchema);

exports = module.exports = Card;