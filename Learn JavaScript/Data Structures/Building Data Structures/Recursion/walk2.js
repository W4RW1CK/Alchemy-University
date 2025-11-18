function walk(node) {
    if(node.next === undefined) return node;

    return walk(node.next);
}

module.exports = walk;
