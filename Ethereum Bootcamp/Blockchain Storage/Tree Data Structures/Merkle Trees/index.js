class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves;
        this.concat = concat;
    }
    getRoot() {
        const left = this.leaves[0];
        const right = this.leaves[1];
        return this.concat(left, right);
    }
}

module.exports = MerkleTree;
