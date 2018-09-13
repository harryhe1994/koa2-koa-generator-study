const cardFacade = require('../facade/cardFacade');

module.exports = {
  findAllCard
};

async function findAllCard(ctx) {
    let id = '5b5ac9c93e79104f980c3669';
    let name = 'harry';
    // let result = await cardFacade.insert();
    let result = await cardFacade.findAllCard({name});
    console.log(result[0], 'ffffff');
    return result;
}