const Block = require('./block');

describe('Block', () => {
    let data, lastBlock, block;

    beforeEach(() => {
        data = 'bar';
        lastBlock = Block.genesis();
        block = Block.mineBlock(lastBlock, data);
    })

    it('should sets the data to match the input', () => {
        expect(block.data).toEqual(data);
    })
    it('should sets lastHash to match the hash last block', () => {
        expect(block.lastHash).toEqual(lastBlock.hash)
    })

    it('generate a hash that maches the dificulty', () =>  {
        expect(block.hash.substring(0, block.difficulty)).toEqual('0'.repeat(block.difficulty));
    })

    it('lowers the difficulty for slowly mined block', () =>  {
        expect(Block.adjustDifficulty(block, block.timestamp + 360000))
        .toEqual(block.difficulty-1)
    })

    it('raises the difficulty for qquickly mined block', () => {
        expect(Block.adjustDifficulty(block, block.timestamp + 1))
        .toEqual(block.difficulty+1)
    })
})