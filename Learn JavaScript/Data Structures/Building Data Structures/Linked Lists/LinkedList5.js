class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(node) {
        node.next = this.head;
        this.head = node;
    }

    addLast(node) {
        if (!this.head) {
            this.head = node;
            return;
        }

        let ref = this.head;
        while (ref.next) ref = ref.next;
        ref.next = node;
    }

    indexOf(node) {
        let current = this.head;
        let index = 0;

        while (current !== null) {
            if (current === node) {
                return index;
            }
            current = current.next;
            index++;
        }
    }

    removeAt(index) {
        if (index === 0) {
            this.head = this.head.next;
            return;
        }

        let idx = 0;
        let node = this.head;

        while (idx < (index - 1)) {
            node = node.next;
            idx++;
        }

        node.next = node.next.next;
    }
}

module.exports = LinkedList;
