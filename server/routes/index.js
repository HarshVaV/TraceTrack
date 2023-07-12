const express = require('express');

const homeRoutes = require('./homeRoutes');
const policeRoutes = require('./policeRoutes');
const userRoutes = require('./users');

const router = express.Router();

// Modify the module export to accept the io object
module.exports =function(io){
    // console.log(io)
    router.use('/', homeRoutes(io)); // Pass the io object to homeRoutes
    router.use('/', userRoutes);
    router.use('/police', policeRoutes);
    return router;
}; //call the function for proper export

// router.use('/', homeRoutes); // Pass the io object to homeRoutes
// router.use('/', userRoutes);
// router.use('/police', policeRoutes);
// module.exports=router;

