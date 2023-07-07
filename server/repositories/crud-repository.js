const { Person } = require("../Models");


async function get(){
    try {
        console.log("Entered crud repository");
        // Person.find()
        //     .then(function(foundPeople){
        //         return foundPeople;
        //     })
        //     .catch((err) => {
        //         console.log("Error occured while running the get in crud-repository");
        //     });
        const docs = await Person.find() ;
        if(docs){
            return docs ;
        }else{
            console.log("Error occured while running the get in crud-repository");
            console.log('eror');
        }
    } catch(error) {
        Logger.error('Something went wrong in the Crud Repo : get');
        throw error;
    }
};

module.exports = {
    get
}