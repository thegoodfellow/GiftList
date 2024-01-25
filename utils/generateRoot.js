const MerkleTree = require('./MerkleTree');
const niceList = require('./niceList');


function generateRoot(){
    // create the merkle tree for the whole nice list
    const merkleTree = new MerkleTree(niceList);

    // get the root
    const root = merkleTree.getRoot();

    return root;
}

module.exports = generateRoot;