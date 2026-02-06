const wallets = require('../data/wallets');
const { uuid } = require('uuidv4');
const validator = require('validator');

//create a wallet
const createWallet = (req, res) => {
    const { userId, balance } = req.body;

    const wallet = {
        id: uuid(),
        userId,
        balance,
        created_at: new Date().toLocaleString()
    }

    wallets.push(wallet)
    console.log("wallet created:", wallet)

    res.status(201).json({
        message: "New wallet created Successfully!",
        wallet: wallet

    });
}

// get user by the userID
const getWalletByUserId = (req, res) => {
    let { userId } = req.params;

    userId = validator.toInt(userId);
    const wallet = wallets.find(w => w.userId === userId);

    if (!wallet) {
        return res.status(404).json({
            message: "Account Not Found"
        });
    }

    res.status(200).json(wallet);
    console.log(`WALLET WITH ID: ${userId}  FOUND`)
}

//deposit
const depositAmount = (req, res) => {
    const { id } = req.params;
    const walletIndex = wallets.findIndex(w => w.id === id);
    
    wallets[walletIndex] = {
        ...wallets[walletIndex],
        balance,
        updated_at: new Date().toLocaleString()
    }
    console.log(`Deposit sucessfully!!, The New balance is ${wallets[walletIndex].balance}`);

    res.status(200).json({
        message: "DEPOSIT SUCESSFUL!!",
        wallet: wallets[walletIndex]
    });

}

//Withdraw
const withdrawAmount = (req, res) => {
    const { id } = req.params;
    const walletIndex = wallets.findIndex(w => w.id === id);

    wallets[walletIndex] = {
        ...wallets[walletIndex],
        balance,
        updated_at: new Date().toLocaleString()
    };
    console.log(`Withdraw Successful!`);
    console.log(`Now the balance is: ${wallets[walletIndex].balance}`);

    res.status(200).json({
        message: "WITHDRAW SUCESSFUL!!",
        wallet: wallets[walletIndex]
    });
}

module.exports = {
    createWallet,
    getWalletByUserId,
    depositAmount,
    withdrawAmount
};