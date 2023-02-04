const {Router} = require('express')
const router = Router()
const userSchema = require('../models/user')
const bcryptjs = require('bcryptjs')


router.post('/register', async (req,res) => {
    const existingUser = await userSchema.findOne({username: req.body.username})

    const {name, surname, username, password} = req.body

    if (!name || !username || !surname || !password){
        res.status(200).json({msg:'There are empty fields. Pleas fill them all.'})
    }else{
        if (existingUser){
            res.status(200).json({msg:'User already exists. Please login.'})
        }else{
            let hashedPassword = await bcryptjs.hash(password, 8)
            const newUser = userSchema({
                name,
                surname,
                username,
                password: hashedPassword,
            })
            newUser.save()
            .then(data=>{res.json(data)})
            .catch(err=>{res.status(200).json({msg:err})})
        }
    }
    
    
})

module.exports = router;