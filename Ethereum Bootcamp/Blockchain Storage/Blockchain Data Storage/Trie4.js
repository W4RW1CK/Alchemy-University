const TrieNode = require('./TrieNode');

class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }
    insert(string) {
        let trie = this.root;

        for (let i = 0; i < string.length; i++) {
            if (!trie.children[string[i]]) {
            trie.children[string[i]] = new TrieNode(string[i]);
            }

            trie = trie.children[string[i]];

            if (i === string.length - 1) {
                trie.isWord = true;
            }
        }
    }

    contains(word) {
        let trie = this.root;
        
        for(let i = 0; i < word.length; i++) {
            if(trie.children[word[i]]) {
                trie = trie.children[word[i]]
            } else {
                return false;
            }
        }

        return trie.isWord;
    }
}

module.exports = Trie;
