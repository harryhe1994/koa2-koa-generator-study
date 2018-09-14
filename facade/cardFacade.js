require('../models/card');  //this need to require before card model
const mongoose = require('mongoose');
const cardModel = mongoose.model('Card');

module.exports = {
    findAllCard,
    insert
};

async function findAllCard(options) {
    return new Promise((resolve, reject) => {
        cardModel.find(options, (err, res) => {
            if (err) {
                reject(err);
            } else {
                resolve(res);
            }
        });
    });
}

function insert(obj) {
    return new Promise((resolve, reject) => {
        cardModel.insertMany({name: 'harry'}, (err, res) => {
            if (err) {
                reject(err)
            } else {
                resolve(res)
            }
        })
    })
}