const express = require('express');
const accRoutes = express.Router()

const {
    createAccount,
    listAccount,
    updateAccount

} = require('../controllers/account.controller')

accRoutes.post('/', createAccount);
accRoutes.get('/', listAccount);
accRoutes.patch('/:accNo', updateAccount);

module.exports = accRoutes