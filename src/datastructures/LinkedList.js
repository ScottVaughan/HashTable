
class Node {
    data;
    next;
    prev;
    constructor(data, next, prev){
        this.data = data;
        this.next = next;
        this.prev = prev; 
    }
}
export class LinkedList {

    head;
    length;

    constructor(){
        this.length = null;
    }

    insert(data){
        if(!this.head){
            // create a new linked list if head is undefined
            this.head = new Node(data, null, null);
            this.length = 0; 
        }else{
            // start at head
            let node = this.head;
            // iterate until we find the end
            while(node.next !== null){
               node = node.next;
            }
            // create a new node to insert 
            node.next = new Node(data, null, node);
            this.length++;
        }
    }

    remove(index){
        if(index < 0 || index === undefined) return;
        if(this.length < index || !this.head){
            return;
        }else{
            // start at head
            let node = this.head;
            let i = 0;
            while(i <= index){
                // once we reach the index to remove
                if(i === index){
                    const previous = node.prev;
                    const next = node.next;
                    // check if this is the head
                    if(!index === 0){
                        previous.next = next; 
                    }else if(next){
                        // if we remove the head, we need to reassign it
                        this.head = next;
                        this.head.prev = null; 
                    }
                    node = null; 
                    break;
                    
                }
                node = node.next;
                i++;
            }
            this.length--;
        }
    }
}
