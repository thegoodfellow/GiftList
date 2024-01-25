const express = require('express');
const verifyProof = require('../utils/verifyProof');
const generateRoot = require('../utils/generateRoot');

const port = 1225;

const app = express();
app.use(express.json());

// TODO: hardcode a merkle root here representing the whole nice list
// paste the hex string in here, without the 0x prefix
const MERKLE_ROOT = generateRoot();

app.post('/gift', (req, res) => {
  // grab the parameters from the front-end here
  const {name, proof} = req.body;

  // TODO: prove that a name is in the list 
  let isInTheList = false;
  isInTheList = verifyProof(proof, name, MERKLE_ROOT);
  if(isInTheList) {
    res.send("You got a toy robot!");
  }
  else {
    res.send("You are not on the list :(");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
