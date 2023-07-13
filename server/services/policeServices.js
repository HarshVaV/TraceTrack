const { crudRepository , searchRepository } = require("../repositories");

async function getPeople(){
    try {
        console.log("Entered police services");
        const people = await crudRepository.getAll();
        return people;

    } catch (error) {
        console.log(error);
        throw error;
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
        throw error;
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
        throw error;
        // throw new Error({
        //     message: "An error occured while creating the person"
        // });
    }
};

async function editPerson(id , data){
    try {
        const person = await crudRepository.edit(id , data);
        return person;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function deletePerson(id) {
    try {
        await crudRepository.deletep(id);
    } catch (error) {
        console.log(error);
        throw error;
    }
}

async function searchPerson(option , params){
    try {
        if(option === "name"){
            const People = await searchRepository.searchByName(option , params);
            return People;
        } else{
            const People = await searchRepository.searchByLocation(option , params);
            return People;
        }
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {
    getPeople,
    getPerson,
    createPerson,
    editPerson,
    deletePerson,
    searchPerson
};