const accounts = require('../data/accounts')

const createAccount = (req, res) => {
    const { accNo, accName, location, balance } = req.body;
    if (!accNo || !accName) {
        return res.status(400).json({
            messsage: "Missing important field"
        });
    }

    accounts[accNo] = { accNo, accName, location, balance };

    res.status(201).json({
        Message: "New account created successfully!!",
        account: accounts[accNo]
    })
}

const listAccount = (req, res) => {
    res.json(accounts)
}

const updateAccount = (req, res) => {
    const { accNo } = req.params;
    
    if (!accounts[accNo]) {
        return res.status(400).json({
            messsage: "Account Not found"
        });
    }

    const ALLOWED_LEY = ["accNo", "accName", "location", "balance"];
    const updates = [];

    for (const key of ALLOWED_LEY) {
        if (req.body[key] !== undefined) {

            if (key === "accName" && typeof req.body[key] !== "string") {
                return res.status(400).json({
                    messsage: "Invalid name datatype"
                });
            }
            if (key === "location" && typeof req.body[key] !== "string") {
                return res.status(400).json({
                    messsage: "invalid acc loca"
                }); 
            }

            if (key === "balance" && typeof req.body[key] !== "number") {
                return res.status(400).json({
                    messsage: "Ballance must be a number"
                });
            }
            updates[key] = req.body[key];
        }
    }
    accounts[accNo] = {
        ...accounts[accNo],
        ...updates,
        updated_at: new Date().toLocaleTimeString()
    }

    res.status(200).json({
        message: "Account has been updated successfull!",
        account: accounts
    });


}


module.exports = {
    createAccount,
    listAccount,
    updateAccount
}