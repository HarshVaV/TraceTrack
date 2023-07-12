const { Person } = require("../Models");


async function getAll(){
    try {
        console.log("Entered crud repository");
        const docs = await Person.find() ;
        if(docs){
            return docs ;
        }else{
            console.log("Error occured while running the get in crud-repository");
            console.log('eror');
        }
    } catch(error) {
        console.error('Something went wrong in the Crud Repo : get');
        throw error;
    }
};

async function getOne(id){
    try {
        // const ID = "64a7f3b82aedf36d08bd9e4c";
        // console.log(id)
        console.log("Entered crud repository");
        const docs = await Person.findById(id) ;
        if(docs){
            // console.log(docs)
            return docs ;
        }else{
            console.log("Error occured while running the get in crud-repository");
            console.log('eror');
        }
    } catch(error) {
        console.error('Something went wrong in the Crud Repo : getOne');
        throw error;
    }
};

async function create(data){
    try {
        console.log("Entered crud repository"); 

        const {name , imageBase64 , gender, age , details,status} = data;
        
        const docs = await Person.create({
            name: name,
            gender: gender,
            age: age,
            selectedFile: imageBase64,
            details: details,
            status: status,
            lastUpdated: new Date(),
            location: [] // Since we are not populating the location field
        }); 
        
        if(docs){
            return docs ;
        }else{
            console.log("Error occured while creating the person in crud-repository");
            console.log('eror');
        }

    } catch (error) {
        console.log("Error occured while creating new person data");
        throw error;
    }
}

async function edit(id , data){
    try {
        const {name , age , gender , details , status} = data;
        const docs = await Person.findByIdAndUpdate(
            {_id: id},
            {
                name: name,
                age: age,
                gender: gender,
                details: details,
                status: status
            }
        );
        if(docs){
            return docs;
        } else{
            console.log("Error occured while editting the person in crud-repository");
            console.log('eror');
        }
    } catch (error) {
        console.log("Error occured while editing person data");
        throw error;
    }
    
}

async function deletep(id) {
    try {
        await Person.findByIdAndDelete(id);
    } catch (error) {
        console.log("Error occured while deleting person data");
        throw error;
    }
}

module.exports = {
    getAll,
    getOne, 
    create,
    edit,
    deletep
}
