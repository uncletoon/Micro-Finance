const express = require('express');
const walletRoutes = express.Router();




const walletValidator = require('../validations/wallet.validator');
const {
    createWallet,
    getWalletByUserId
} = require('../controllers/wallet.controller');


walletRoutes.post('/', walletValidator, createWallet);
walletRoutes.get('/:userId', getWalletByUserId);


module.exports = walletRoutes;