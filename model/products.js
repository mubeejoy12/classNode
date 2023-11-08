const express =  require('express')
const router = express.Router()

router.get('/productList', (req, res) => {
    res.send('this is a product list')
})

module.exports = router