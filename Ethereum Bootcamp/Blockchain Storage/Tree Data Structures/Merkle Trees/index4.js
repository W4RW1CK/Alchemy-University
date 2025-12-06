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
            if (arr.length === 0) return [];
            if (arr.length === 1) return [arr[0]]; 
            const left = arr[0];
            const right = arr[1];
            const combined = this.concat(left, right);

            return [combined, ...buildLayer(arr.slice(2))];
        };

        const nextLayer = buildLayer(leaves);
        return this.getRoot(nextLayer);
    }

    getProof(index, layer = this.leaves, proof = []) {
        if (layer.length === 1) return proof;
        const newLayer = [];
        for (let i = 0; i < layer.length; i += 2) {
            let left = layer[i];
            let right = layer[i + 1];
            if (!right) {
                newLayer.push(left);
            }
            else {
                newLayer.push(this.concat(left, right));

                if (i === index || i === index - 1) {
                    let isLeft = !(index % 2);
                    proof.push({
                        data: isLeft ? right : left,
                        left: !isLeft
                    });
                }
            }
        }
        return this.getProof(Math.floor(index / 2), newLayer, proof);
    }
}

module.exports = MerkleTree;
