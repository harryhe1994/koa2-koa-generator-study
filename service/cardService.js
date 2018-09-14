const cardFacade = require('../facade/cardFacade');

module.exports = {
  findAllCard
};

async function findAllCard() {
    let id = '5b9a6da55d57783d504586a2';
    let name = 'harry';
    // let result = await cardFacade.insert();
    let result = await cardFacade.findAllCard({_id: id});
    console.log(result[0], 'ffffff');
    return result;
}