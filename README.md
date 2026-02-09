# Wallet System API

A simple **Node.js + Express** backend project built for learning backend fundamentals step by step.  
This project introduces **users**, **wallets**, and basic **money operations** using clean architecture and REST APIs.

---

## 📌 Project Goals

- Understand how a backend server works
- Learn Express request/response flow
- Practice clean folder structure
- Implement core wallet logic (deposit & withdraw)
- Build confidence with Git & commits

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **dotenv**
- **nodemon** (development)

> ⚠️ Data is stored **in-memory** (arrays). No database yet — this is intentional for learning.

---

## 📁 Folder Structure

```
src/
├── app.js              # Express app configuration
├── server.js           # Server startup
├── routes/
│   ├── user.routes.js
│   └── wallet.routes.js
├── controllers/
│   ├── user.controller.js
│   └── wallet.controller.js
├── data/
│   ├── users.js
│   └── wallets.js
└── utils/
    └── idGenerator.js
```

---

## ⚙️ Setup Instructions

1. **Clone the repository**

```bash
git clone https://github.com/uncletoon/wallet-system-api.git
cd wallet-system-api
```

2. **Install dependencies**

```bash
npm install
```

3. **Create `.env` file**

```env
PORT=3000
```

4. **Run the server**

```bash
npm run dev
```

Server will start on:

```
http://localhost:3000
```

---

## ❤️ Health Check

**GET** `/health`

Response:

```json
{
  "status": "ok",
  "uptime": "123.45"
}
```

---

## 👤 User APIs

### Create User

**POST** `/users`

Payload:

```json
{
  "userId": 1,
  "name": "John Doe",
  "email": "john@example.com"
}
```

### Get All Users

**GET** `/users`

Response:

```json
[
  {
    "id": "u1",
    "userId": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "created_at": "2026-02-01T10:00:00Z"
  }
]
```

---

## 💰 Wallet APIs

Each **user has exactly one wallet**.

### Create Wallet

**POST** `/wallets`

Payload:

```json
{
  "userId": 1,
  "amount": 5000
}
```

---

### Get Wallet by User ID

**GET** `/wallets/:userId`

---

### Deposit Money

**POST** `/wallets/:id/deposit`

Payload:

```json
{
  "amount": 5000
}
```

---

### Withdraw Money

**POST** `/wallets/:id/withdraw`

Payload:

```json
{
  "amount": 2000
}
```

> ⚠️ **Important:** Withdrawals are allowed even if the balance becomes negative.
> This is a **known design flaw** and will be fixed in later weeks.

### Get All Users With Wallet

**GET** `/wallets/all`

Response:

```json
[
  {
    "id": "u1",
    "name": "John Doe",
    "email": "john@example.com",
    "userId": 1,
    "balance": 5000
  }
]
```
---

## 🧠 Learning Concepts Covered

- How Express handles requests
- Request → Route → Controller → Response flow
- Why separation of concerns matters
- Wallet balance calculation logic
- Why allowing negative balances is risky

---

## ✅ Evaluation Checklist

- [ ] Server starts correctly
- [ ] `/health` endpoint works
- [ ] Users can be created & listed
- [ ] Wallet is linked to user
- [ ] Deposit & withdraw update balance
- [ ] Code runs without errors
- [ ] Can explain request/response flow

---

