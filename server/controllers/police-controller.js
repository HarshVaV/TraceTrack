const {PoliceServices} = require("../services")

async function getPersons(req , res) {
    try {
        console.log("Entered police controller");
        //  get the details of all the people in the database through PoliceServices
        const People = await PoliceServices.getPeople();
        // console.log(People);
        res.render("Police" , {
            People: People
        });
        // res.send(People);
        
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error in police controller');
    }
}

module.exports = {
    getPersons
}