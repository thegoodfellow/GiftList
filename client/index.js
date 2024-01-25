const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  // TODO: how do we prove to the server we're on the nice list? 
  const nameOnList = "Alexander Franey";
  const otherName = "KKK";

  // create the merkle tree for the whole nice list
  const merkleTree = new MerkleTree(niceList);

  // get the root
  const root = merkleTree.getRoot();

  // find the proof that norman block is in the list 
  const index = niceList.findIndex(n => n === nameOnList);
  const proof = merkleTree.getProof(index);
  console.log("proof=" + proof);

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    // TODO: add request body parameters here!
    name: nameOnList, proof: proof,
  });

  console.log({ gift });
}

main();