const wallets = require('../data/wallets');

const walletValidator = (req, res, next) => {
    const { userId, balance } = req.body;

    if(!userId) {
        res.status(400).json({
            message: "User ID must be provided"
        });
        return;
    }

    if(!balance) {
        res.status(400).json({
            message: "You have to provide a balance"
        });
        return;
    };

    if(typeof balance !== "number") {
        return res.status(400), json({
            message: "Balance must be a number."
        });
    }

const walletExist = wallets.find(u => u.userId === userId)
if (walletExist) {
    res.status(409).json({
        message: 'Wallet with this user ID is already exist.'
    });

    console.log(`Account with this user ID: ${userId} is already exist.`);
    return;
}

next();

}

module.exports = walletValidator;