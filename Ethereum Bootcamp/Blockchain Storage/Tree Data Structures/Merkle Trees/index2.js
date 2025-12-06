class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves;
        this.concat = concat;
    }

    getRoot(leaves = this.leaves) {
        if (leaves.length === 1) {
            return leaves[0];
        }

        const buildLayer = (arr) => {
            const left = arr[0];
            const right = arr[1];
            const combined = this.concat(left, right);

            return [combined, ...buildLayer(arr.slice(2))];
        };

        const nextLayer = buildLayer(leaves);
        return this.getRoot(nextLayer);
    }
}

module.exports = MerkleTree;
