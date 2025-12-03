class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node) {
        if(!this.root) {
            this.root = node;
            return;
        }

        this.insertUnder(this.root, node);
    }

    insertUnder(parent, child) {
        if(child.data < parent.data) {
            if(!parent.left) {
                parent.left = child;
            } else {
                this.insertUnder(parent.left, child);
            }
        }

        if (child.data > parent.data) {
            if(!parent.right) {
                parent.right = child;
            } else {
                this.insertUnder(parent.right, child);
            }
        }

    }

}

module.exports = Tree;
