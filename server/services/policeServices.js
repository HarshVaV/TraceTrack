const { crudRepository } = require("../repositories");

async function getPeople(){
    try {
        console.log("Entered police services");
        const people = await crudRepository.getAll();
        return people;

    } catch (error) {
        console.log(error);
        return error;
        // throw new Error({
        //     message: "An error occured while getting the details of all People"
        // });
    }
};

async function getPerson(id){
    try {
        console.log("Entered police services");
        const person = await crudRepository.getOne(id);
        return person;

    } catch (error) {
        // console.log(error);
        return error;
        // throw new Error({
        //     message: "An error occured while getting the details of a person"
        // });
    }
};

async function createPerson(data){
    try {
        console.log("Entered police Services");
        const person = await crudRepository.create(data);
        return person;
    } catch (error) {
        console.log(error);
        return error;
        // throw new Error({
        //     message: "An error occured while creating the person"
        // });
    }
};

module.exports = {
    getPeople,
    getPerson,
    createPerson
};