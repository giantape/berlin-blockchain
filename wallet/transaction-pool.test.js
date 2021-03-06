const TransactionPool = require('./transaction-pool');
const Transaction = require('./transaction');
const Wallet = require('./index');
const Blockchain = require('../blockchain');

describe('TransactionPool', () => {
    let tp, wallet, transaction, bc;

    beforeEach(() => {
        tp = new TransactionPool();
        bc = new Blockchain(); 
        wallet = new Wallet();
        transaction = wallet.createTransaction('r3nd-4ddr355', 30, bc, tp);
    });

    it('adds a transaction to the pool', () => {
        expect(tp.transactions.find(t => t.id === transaction.id)).toEqual(transaction)
    })

    it('updates a transaction in the pool', () => {
        const oldTransaction = JSON.stringify(transaction);
        const newTransaction = transaction.update(wallet, 'foo-addr355', 40);
        tp.updateOrAddTransaction(newTransaction);
        expect(JSON.stringify(tp.transactions.find(t => t.id === transaction.id))).not.toEqual(oldTransaction);
    })

    it('clear transactions', () => {
        tp.clear();
        expect(tp.transactions).toEqual([]);
    })

    describe('mixing valid and corrupt transactions', () => {
        let validTransactions;
        beforeEach(() => {
            validTransactions = [...tp.transactions];
            for (let i = 0; i < 6; i++) {
                wallet = new Wallet();
                transaction = wallet.createTransaction('foo-4ddr355', 30, bc, tp);
                if (i%2==0) {
                    transaction.input.amount = 99999;
                } else {
                    validTransactions.push(transaction);
                }
            }
        });

        it('shows a difference between valid and corrupt transactions', () => {
            expect(JSON.stringify(tp.transactions)).not.toEqual(JSON.stringify(validTransactions));
        })

        it('graps valid transactions', () => {
            expect(tp.validTransactions()).toEqual(validTransactions);
        })
    })
})