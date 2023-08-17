class Stack{
    constructor(){
        this.item = [];
        this.count = 0;
    }
    // add to bottom in array
    push(element){
        this.item[this.count] = element;
        console.log("add to count ", this.count);
        this.count +=1;
        return this.count -1;
    }

    //pop first element
    pop(element){
        if(this.count===0) return undefined;

        let deleteElement = this.item[this.count - 1];
        this.count-=1;
        console.log('remove',this.item[this.count -1]);
        return deleteElement;
    } 

    // check top element in stack
    peek(){
        console.log('top element is' , this.item[this.count -1]);
        return this.item[this.count -1];
    }

    //check if stack empty
    isEmpty(){
        console.log(this.count === 0 ? 'stack is empty': 'stack is not empty');
        return this.count ===0;
    }
    //check size 
    size(){
        console.log('size of stack is', this.count - 1);
        return this.count;
    }

    // printf element in stack 
    printf(){
        if(this.isEmpty() === 0)return ;
        for(let i =0; i < this.count ; i++){
            console.log(`element in stack is`,this.item[i]);
        }
        return this.count
    }

    clear(){
        this.count = 0;
        this.item = [];
        console.log('stack cleared');
        return this.item;
    }
}

const stack = new Stack();
stack.isEmpty();
stack.push(100);
stack.push(200);
stack.push(300);
stack.push(400);
stack.pop();
stack.pop();
stack.size();
stack.printf();
stack.peek();
stack.clear();
stack.isEmpty();