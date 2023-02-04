const {Router} = require('express')
const router = Router()
const userSchema = require('../models/user')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/login', async (req,res) => {
    const {username, password} = req.body
    if (!username || !password){
        res.status(200).json({msg:'There are empty fields. Pleas fill them all.'})
    }else{
        const existingUser = await userSchema.findOne({username: req.body.username})
        if(!existingUser){
            res.status(200).json({msg:'User not found.'})
        }else{
            let isLogged = await bcryptjs.compare(password, existingUser.password)
            if(isLogged){
                const token = jwt.sign(existingUser.toJSON(), process.env.JWT_KEY)
                res.status(200).json({
                    token: token,
                })
            }else{
                res.status(200).json({msg:'Wrong password.'})
            }
        }
    }
})

module.exports = router;