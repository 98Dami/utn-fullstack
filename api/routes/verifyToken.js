const {Router} = require('express')
const router = Router()
const jwt = require('jsonwebtoken')

router.post('/verifytoken', async (req,res) => {
    const token = req.body.token
    if(token){
        res.json(jwt.verify(token, 'fullstack'))
    }else{
        res.json({})
    }
})

module.exports = router;