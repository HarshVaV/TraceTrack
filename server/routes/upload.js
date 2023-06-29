const express=require('express')

const router=express.Router()

router.get('/',(req,res)=>{
    res.send('upload Details here')
})

router.post('/',(req,res)=>{
    const {file,city,phone, email}=req.body
    // call-API + Send-Info
    // res.render('ThankYou');
    res.send(req.body)
})

module.exports=router