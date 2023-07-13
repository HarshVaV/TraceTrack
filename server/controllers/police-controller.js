const { convertImageToBase64 } = require("../middleware/multer");
const {PoliceServices} = require("../services")


async function getPersons(req , res) {
    try {
        console.log("Entered police controller");
        //  get the details of all the people in the database through PoliceServices
        const People = await PoliceServices.getPeople();
        //  console.log(People);
        res.render("police/home" , {
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
        res.render("police/missing",{
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
        const {name , gender , age , details,status} = req.body;
        const Person = await PoliceServices.createPerson({
            name ,
            imageBase64 ,
            gender , 
            age , 
            details,
            status
        });
        console.log("New Person details added to the database");
        const id = Person._id.toString()
        
        //  Turn this to render the missing.ejs
        res.redirect("/police/view/"+id);
        // return res.status(200).send("Request Successful", Person);
    } catch (error) {
        console.error(error);
        return res.status(500).send('Error in police controller in createPerson');
    }
}

async function editPersonGet(req , res) {
    try {
        console.log("Entered police controller");
        //  get the details of all the people in the database through PoliceServices
        const Person = await PoliceServices.getPerson(req.params.id);
        // console.log(People);
        res.render("police/edit",{
            person: Person
        });
        // res.send(People);
        
    } catch (error) {
        // console.error(error);
        return res.status(500).send('Error in police controller');
    }
}

async function editPersonPost(req , res) {
    try {
        console.log("Enterd police controller");

        const id = req.params.id;

        await PoliceServices.editPerson(id, req.body);

        res.redirect("/police/view/"+id);

    } catch (error) {
        // console.error(error);
        return res.status(500).send('Error in police controller');
    }
}

async function deletePerson(req , res) {
    try {
        console.log("Entered Police Controller");

        const id = req.params.id;

        await PoliceServices.deletePerson(id);

        res.redirect("/police/");

    } catch (error) {
        return res.status(500).send('Error in police controller');
    }
}

async function searchPerson(req , res) {
    try {
        console.log(req.body);

        const option= req.body.searchOption;
        const param= req.body.searchParams;
        
        const People = await PoliceServices.searchPerson(option , param);

        if(!People){
            res.send("No Results found");
        }else{
            console.log(People);
        }

    } catch (error) {
        return res.status(500).send('Error in police controller');
    }
}

module.exports = {
    getPersons,
    getPerson,
    createPerson,
    editPersonGet,
    editPersonPost,
    deletePerson,
    searchPerson
}