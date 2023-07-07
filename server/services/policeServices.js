const { crudRepository } = require("../repositories");

async function getPeople(){
    try {
        console.log("Entered police services");
        const people = await crudRepository.get();
        return people;

    } catch (error) {
        console.log(error);
        return res.status(500).send("An error occured while getting the details of all People");
    }
}

module.exports = {
    getPeople
}