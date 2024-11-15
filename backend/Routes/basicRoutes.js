const express = require('express');
const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({extended: true}));

const todoModel = require('../model/todoData')


//GET
router.get('/', async (req,res) => {
    try {
        const data = await todoModel.find()
    res.status(200).send(data)
    } catch (error) {
        res.status(404).send('invalid data')
    }   
})

//post
router.post('/post', async(req,res) => {
    try {
        var item = req.body;
        const data = new todoModel(item);
        const savedData = await data.save();
        res.status(200).send('post successful');
    } catch (error) {
        res.status(404).send('post failed');   
    }
})


//put
router.put('/put/:id', async (req, res) => {
    try {
        const id = req.params.id;
    const data = await todoModel.findByIdAndUpdate(id, req.body);
    res.status(200).send('update successful');
    } catch (error) {
        res.status(404).send('update failed');   
    }
})


//delete
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
    const data = await todoModel.findByIdAndDelete(id);
    res.status(200).send('delete successful');
    } catch (error) {
        res.status(404).send('delete failed');   
    }
    
})




module.exports = router;
