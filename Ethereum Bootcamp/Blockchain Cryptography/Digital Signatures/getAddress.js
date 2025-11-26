const secp = require("ethereum-cryptography/secp256k1");
const { keccak256 } = require("ethereum-cryptography/keccak");

function getAddress(publicKey) {
    firstByte = publicKey.slice(0, 1);
    keccakHash = keccak256(publicKey.slice(1));
    return keccakHash.slice(-20);
}

module.exports = getAddress;
