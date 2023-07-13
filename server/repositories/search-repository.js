const { Person } = require("../Models");

async function searchByLocation(option , params) {
    try {
        const propertyName = option;
        const propertyValue = params;
        const location = "location";
        console.log(propertyName);
        console.log(propertyValue);
        const People = Person.find({ 'locations.location': {  $regex: new RegExp(propertyValue, 'i')} });
        return People;
    } catch (error) {
        console.log("Error occured while making a search in the person database Location");
        throw error;
    }
}


async function searchByName(option , params){
    try {
        const propertyName = option;
        const propertyValue = params;
        const People = Person.find({ [propertyName]: { $regex: new RegExp(propertyValue, 'i') } });
        return People;
    } catch (error) {
        console.log("Error occured while making a search in the person database Name");
        throw error;
    }
}


module.exports = {
    searchByName,
    searchByLocation
}
