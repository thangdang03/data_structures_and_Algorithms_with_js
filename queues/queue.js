class Queues{
      constructor(){
        this.items = [];
        this.count =0;
      }

      // push element in first item
      push(element){
        this.items[this.count] = element;
        this.count+=1;
        console.log(`add element ${element} to ${this.count}`);
        return this.count;
      }

      //pop element in first item
      pop(){
        let deleteElement = this.items[0];
        this.count-=1;
        for(let i = 0; i <= this.count-1;i++){
            this.items[i] = this.items[i+1];
            console.log(this.items[i]);
        }
        console.log(`remove ` , deleteElement);
        return this.count;
      }

      isEmpty(){
        console.log(this.count ===0 ? 'queues is empty' : 'queues is not empty');
        return this.count ===0;
      }

      peek(){
        if(this.isEmpty())return;
        console.log('fist item is',this.items[0]);
      }

      size(){
        console.log(`size queue is`,this.count);
      }

      clear(){
        this.count = 0;
        this.items = [];
        console.log('queues cleared');
      }

      printf(){
        if(this.isEmpty())return;
        for(let i =0; i< this.count ; i++){
            console.log(`element is` , this.items[i]);
        }
        return;
      }
}

const queues = new  Queues();
queues.push(100);
queues.push(200);
queues.push(300);
queues.push(400);
queues.pop();
queues.size();
queues.isEmpty();
queues.peek();
queues.printf();
