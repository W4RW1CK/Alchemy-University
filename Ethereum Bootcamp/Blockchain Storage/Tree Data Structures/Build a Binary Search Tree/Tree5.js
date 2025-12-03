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

    hasNode(number) {
        let current = this.root
        while(current){
            if(number === current.data) return true;
            if (number < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }
}

module.exports = Tree;
