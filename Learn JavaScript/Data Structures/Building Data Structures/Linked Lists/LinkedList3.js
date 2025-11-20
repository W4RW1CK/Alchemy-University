class LinkedList {
    constructor() {
        this.head = null;
    }

    addFirst(node) {
        node.next = this.head;
        this.head = node; 
    }

    addLast(node) {
        if(!this.head) {
            this.head = node;
            return;
        }
        
        let ref = this.head;
        while (ref.next) ref = ref.next;
        ref.next = node;
    }
}

module.exports = LinkedList;
