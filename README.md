# MultiSigWallet
A decentralized Multi-Signature Wallet built on Solidity. This smart contract allows multiple owners to collectively manage funds, where transactions require confirmation from a specified number of owners before being executed.

## Features
- Secure multi-owner wallet with a defined number of confirmations required to execute a transaction.
- Owners can submit transactions, confirm other owners' transactions, and execute them once confirmed.
- Prevents unauthorized transactions by requiring the consent of multiple owners.
- Transaction transparency through event logs for submission, confirmation, and execution.

## Installation
Follow these steps to set up and deploy the MultiSigWallet on your local or test environment.

### Steps
**Compiling and deploying the contract is not required, as the contract as already been deployed on the Rootstock Testnet**
Clone the repository:

```bash
git clone https://github.com/ETHGlobal-Ohora/eth-online-frontend.git
cd eth-online-frontend

```bash
npm install
```

**Create a .env file** in the root directory and add the following:
```bash
PRIVATE_KEY=<your_private_key>
RSK_MAINNET_RPC_URL: ""
RSK_TESTNET_RPC_URL: ""
```

```bash
npm run dev
```

## Smart Contract Methods
The contract exposes the following methods for interacting with the wallet:

### `submitTransaction(address _to) public payable`
Submitting Transactions
Users can submit a transaction that transfers a specified amount of Ether to an address. The transaction requires confirmations from other owners before it can be executed.

### `confirmTransaction(uint _transactionId) public onlyOwner`
Confirming Transactions
Once a transaction is submitted, other owners must confirm it before it can be executed.


### `executeTransaction(uint _transactionId) public payable`
Executing Transactions
After the required number of confirmations is received, any owner can execute the transaction.
Call the executeTransaction function and pass the transaction ID (_transactionId) to execute the transaction.

### `submitTransaction(address _to)`
Submits a transaction to send Ether to the given address.
The amount of Ether to be sent is determined by the msg.value.

### `confirmTransaction(uint _transactionId)`
Allows an owner to confirm a pending transaction. A transaction must receive a certain number of confirmations before it can be executed.

### `isTransactionConfirmed(uint _transactionId)`
Checks if the transaction has enough confirmations from the owners.

### `executeTransaction(uint _transactionId)`
Executes a confirmed transaction. This will transfer the specified amount of Ether to the destination address.

### `getTransaction(uint _transactionId)`
Returns the details of a transaction (destination address, amount of Ether, and execution status).

## Events

### `TransactionSubmitted(uint transactionId, address sender, address receiver, uint amount)`
Emitted when a new transaction is submitted.

### `TransactionConfirmed(uint transactionId)`
Emitted when a transaction is confirmed by an owner.

### `TransactionExecuted(uint transactionId)`
Emitted when a confirmed transaction is executed.
