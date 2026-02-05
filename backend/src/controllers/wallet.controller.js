const wallets = require('../data/wallets');
const { uuid } = require('uuidv4');

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
        
    })
}

// get user by the userID
const getWalletByUserId = (req, res) => {
    const { userId } = req.params;
    
    const wallet = wallets.find(u => u.userId === userId)
    if (!wallet) {
        return res.status(404).json({
            message: "Account Not Found"
        });
    }

    res.status(200).json(wallet);
    console.log(`WALLET WITH ID: ${userId}  FOUND`)

}

module.exports = {
    createWallet,
    getWalletByUserId
    };