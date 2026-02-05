const wallets = require('../data/wallets');
const validator = require('validator')


const walletValidator = (req, res, next) => {
    let { userId, balance } = req.body;

    //sinitize/cleanning.
    userId = validator.trim(String(userId ?? ""));
    balance = validator.trim(String(balance ?? ""));

    //check empty
    if (validator.isEmpty(userId)) {
        return res.status(400).json({
            message: "User ID must be provided"
        });
    }

    if (validator.isEmpty(balance)) {
        res.status(400).json({
            message: "The balance must be provided"
        });
        return;
    }

    //validate type
    if (!validator.isInt(userId)) {
        return res.status(400).json({
            message: "User ID must be an Integer"
        });
    }
    if (!validator.isNumeric(balance)) {
        res.status(400).json({
            message: "The balance must be a Number"
        });
        return;
    }

    //Convert
    userId = validator.toInt(userId);
    balance = validator.toFloat(balance);

    //Check if wallet already exist
    const walletExist = wallets.find(w => w.userId === userId)
    if (walletExist) {
        res.status(409).json({
            message: 'Wallet with this user ID is already exist.'
        });

        console.log(`Account with this user ID: ${userId} is already exist.`);
        return;
    }

    //Save cleaned data
    req.body.userId = userId;
    req.body.balance = balance;

    next();

}

module.exports = walletValidator;