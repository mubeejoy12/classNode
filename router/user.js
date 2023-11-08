const express = require('express');
const router = express.Router()



let userList = [
    {userName: 'John', email: 'james@example.com'},
    {userName: 'latable', email: 'latable@example.com'},
    {userName: 'kitten', email: 'kitten@example.com'}
]
router.get('/userList', (req, res) => {
    res.json(userList)
})
module.exports = router