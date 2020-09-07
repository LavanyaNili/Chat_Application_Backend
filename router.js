const express=require('express');
const router=express.Router();

//get request to the root route

router.get('/', (req,res) =>{
    res.send('Server is up and running');

})

module.exports = router;
