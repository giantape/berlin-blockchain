const Blockchain = require('./index')
const Block = require('./block')

describe('Blockchain', () => {
    let bc, bc2;

    beforeEach(() => {
        bc = new Blockchain();
        bc2 = new Blockchain();
    });

    it('start with genesis block', () => {
        expect(bc.chain[0]).toEqual(Block.genesis())
    })

    it('add a new Block', () => {
        const data = 'foo';
        bc.addBlock(data);

        expect(bc.chain[bc.chain.length-1].data).toEqual(data)
    })

    it('validates a valid chain', () => {
        bc2.addBlock('foo')
        expect(bc.isValidChain(bc2.chain)).toBe(true)
    });

    it('invalidate a chain with corrupt the genesis block', () => {
        bc2.chain[0].data = 'Bad data';
        expect(bc.isValidChain(bc2.chain)).toBe(false)
    })

    it('invalidates a curropt chain', () => {
        bc2.addBlock('foo');
        bc2.chain[0].data = 'Not foo';

        expect(bc.isValidChain(bc2.chain)).toBe(false)
    })

    it('Replace chain with a valid chain', () => {
        bc2.addBlock('boo');
        bc.replaceChain(bc2.chain);

        expect(bc.chain).toEqual(bc2.chain);
    })

    it('doest not replace the chain with one of less than or equal to length', () => {
        bc.addBlock('foo');
        bc.replaceChain(bc2.chain);

        expect(bc.chain).not.toEqual(bc2.chain);
    })


})