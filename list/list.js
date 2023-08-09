    class node{
        constructor(data,next = null){
            this.data = data;
            this.next = next;
        }
    }
    
    class linkedList{
        constructor(){
            this.head = null;
            this.size = 0;
        }
    // insert first node
        insertFirstNode(data){
            this.head = new node(data,this.head);
            this.size++;
        }
    // insert last node 
       insertLastNode(data){
            const node = new node(data);
            let current ;
            // if linkedList empty
            if(!this.head){
                this.head = node;
            }else{
                this.head = current;
            // point to last point
                while(current){
                   current = current.next
                }
                current.next = node
            }
        this.size++;
   
       }
    // insert at index 
        insertAtIndex(data,index){
            if(index >= 0 && index > this.size){
                return;
            }
            if(index === 0){
                this.insertFirstNode(data);
                return;
            }
            const node1 = new node(data);
            let current , previous;
            current = this.head;
            let count = 0;
            while(count < index){
               previous = current; // before node
               count++;
               current = current.next;// after node
            }
            node1.next = current;
            previous.next = node1;
            this.size++;
        }
    // get index 
        getIndex(index){
            if(index >= 0 && index > this.size){
                return;
            }
            let current = this.head;
            let count =  0 ;
            while(current){
                if(count === index){
                    console.log('index search ::',current.data);
                }
                count++;
                current = current.next;
            }
            return ;
        }
    // remove element at index 
      removeAtIndex(index){
        if(index >= 0 && index > this.size){
            return;
        }
        let current = this.head;
        let previous;
        let count = 0;
        if(index === 0){
            this.head = current.next;
        }else{
            while(count < index){
                count ++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
      }
    // find by value in node
        findNodeByValues(value){
            let current = this.head;
            let index = 0;
            while(current){
                if(current.data === value){
                    console.log(`value is ${current.data}, at index ${index}`);
                    return;
                }
                index++;
                current  = current.next;
            }
            console.log('not found node with value',value);
            return;
        }
    // Printf list data
        PrintfListData(){
            let current = this.head;

            while(current){
                console.log(current.data);
                current = current.next;
            }
        }
    }

    const ll = new linkedList();
    ll.insertFirstNode(100);
    ll.insertFirstNode(200);
    ll.insertFirstNode(300);
    ll.insertFirstNode(400);
    ll.insertAtIndex(500,2);
    ll.getIndex(4);
    ll.removeAtIndex(1);
    ll.findNodeByValues(1010);
    ll.PrintfListData();