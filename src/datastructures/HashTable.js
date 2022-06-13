import { LinkedList  } from "../LinkedList/LinkedList";
export class HashTable {
    constructor(size){
        this.size = size ? size : 10;
        this.hashtable = [];
        this.setupTable();
    }

    setupTable(){
        // When an index in a hash table is shared this is a collusion
        // We use a linkedlist at each index to prevent overriding
        for(let i = 0; i < this.size; i++){
            this.hashtable[i] = new LinkedList(); 
        }

    }

    // Speed O(n)
    hash(key){
        let hash = 0;
        for(let i = 0; i < key.length; i++){
            hash += key.charCodeAt(i);
        }
        return hash % this.size; 
    }

    add(key, value){
        key = this.hash(key);
        const linkedlist = this.hashtable[key];
        linkedlist.insert(value, key);
    }

    get(key){
        key = this.hash(key);
        const linkedlist = this.hashtable[key];
        return linkedlist.find(key);
    }
}
