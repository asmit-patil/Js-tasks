class Node {
    constructor(data)
    {
        this.data = data;
        this.next = null
    }
}
class LinkedList {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }

add(data)
{
    // creates a new node
    var node = new Node(data);
 
    // to store current node
    var currentnode;
 
    // if list is Empty add the
    // element and make it head
    if (this.head == null)
        this.head = node;
    else {
        currentnode = this.head;
 
        // iterate to the end of the
        // list
        while (currentnode.next) {
            currentnode = currentnode.next;
        }
 
        // add node
        currentnode.next = node;
    }
    this.size++;
   return false;
}

insertAt(data, nodeindex)
{
    if (node > 0 && node > this.size)
        return false;
    else {
        // creates a new node
        var node = new Node(data);
        var currnode, prevnode;
 
        currnode = this.head;
 
        // add the element to the
        // first index
        if (nodeindex == 0) {
            node.next = head;
            this.head = node;
        } else {
            currnode = this.head;
            var iterator = 0;
 
            // iterate over the list to find
            // the position to insert
            while (iterator < nodeindex) {
                iterator++;
                prevnode = currnode;
                currnode = currnode.next;
            }
 
            // adding an element
            node.next = currnode;
            prevnode.next = node;
        }
        this.size++;
    }
}

removeFrom(index)
{
    if (index > 0 && index > this.size)
        return -1;
    else {
        var currnode, prevnode, iterator = 0;
        currnode = this.head;
        prevnode = currnode;
 
        // deleting first element
        if (index ===  0) {
            this.head = currnode.next;
        } else {
            // iterate over the list to the
            // position to removce an element
            while (iterator < index) {
                iterator++;
                prevnode = currnode;
                currnode = currnode.next;
            }
 
            // remove the element
            prevnode.next = currnode.next;
        }
        this.size--;
 
        // return the remove element
        return currnode.element;
    }
}


removeElement(data)
{
    var currentnode = this.head;
    var prevnode = null;
 
    // iterate over the list
    while (currentnode != null) {
        // comparing element with current
        // element if found then remove the
        // and return true
        if (currentnode.data ===  data) {
            if (prevnode == null) {
                this.head = currentnode.next;
            } else {
                prevnode.next = currentnode.next;
            }
            this.size--;
            return currentnode.data;
        }
        prevnode = currentnode;
        currentnode = currentnode.next;
    }
    return -1;
}

indexOf(data)
{
    var count = 0;
    var currentnode = this.head;
 
    // iterae over the list
    while (currentnode != null) {
        // compare each element of the list
        // with given element
        if (currentnode.data === data)
            return count;
        count++;
        currentnode = currentnode.next;
    }
 
    // not found
    return -1;
}

isEmpty()
{
    return this.size == 0;
}

size_of_list()
{
    return (this.size);
}


printList()
{
    var currnode = this.head;
    var str = "";
    while (currnode) {
        str += currnode.data + " ";
        currnode = currnode.next;
    }
    return (str);
}

}
// creating an object for theLinkedlist class
let ll = new LinkedList();
 
// testing isEmpty on an empty list returns true
console.log("Is list is empty? " );
console.log(ll.isEmpty());
 console.log();

// adding element to the list
ll.add(10);
var p= ll.printList();
// prints 10
console.log("Printitng list after adding first element: " + p);
//ll.printList();
console.log();

// returns 1
console.log("size of list is: " +(ll.size_of_list()));
//ll.size_of_list();
console.log();
 
// adding more elements to the list
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);
console.log("Printitng list after adding more elements in existing list: " + ll.printList() );
// returns 10 20 30 40 50
//ll.printList();
console.log();

//remove 40 from list
ll.removeElement(40);

// returns 10 20 30 50
console.log("list after deleting element 40 from list: "+ ll.printList()  );
//ll.printList();
console.log();
// returns 1
console.log("Index of 30 is : " + ll.indexOf(30));
console.log();
// insert 60 at second positon
// ll contains 10 20 60 30 40
console.log("adding 60 in list at index 2");
ll.insertAt(60, 2);
console.log("list after adding element 60: " +ll.printList()  );
//ll.printList();
console.log();
// returns false
console.log("is List Empty ? " + ll.isEmpty());
console.log();
// remove 3rd element from the list
ll.removeFrom(3);
 
// prints 10 20 60 40
console.log("list after deleting element of index[3]: "+ ll.printList()  );
//ll.printList();

console.log(ll.removeElement(78));