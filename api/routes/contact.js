const {Router} = require('express')
const router = Router()

router.post('/contact', async (req,res) => {
    res.send('Message recieved!')
})

module.exports = router;