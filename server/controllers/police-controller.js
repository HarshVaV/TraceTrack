const { convertImageToBase64 } = require("../middleware/multer");
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

async function getPerson(req , res) {
    try {
        console.log("Entered police controller");
        //  get the details of all the people in the database through PoliceServices
        const Person = await PoliceServices.getPerson(req.params.id);
        // console.log(People);
        res.render("missing",{
            person: Person
        });
        // res.send(People);
        
    } catch (error) {
        // console.error(error);
        return res.status(500).send('Error in police controller');
    }
}

async function createPerson(req , res) {
    const imagePath = req.file.path;
    try {
        const imageBase64 = await convertImageToBase64(imagePath);
        const {name , gender , age , details} = req.body;
        const Person = await PoliceServices.createPerson({
            name ,
            imageBase64 ,
            gender , 
            age , 
            details
        });
        console.log("New Person details added to the database");
        res.render("Police" , {
            person: Person
        });
        // return res.status(200).send("Request Successful", Person);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error in police controller in createPerson');
    }
}

module.exports = {
    getPersons,
    getPerson,
    createPerson
}