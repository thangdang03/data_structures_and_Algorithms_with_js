// create a array 
let a = [];
let b = [1,2,3,4,5];
let c = [
    'Dang Van Thang', 
    {
       FullName: "thang",
       age: 20
    },
    19
];
let str = 'học lên nữa';
//create array by slipt
let d = str.split(' ');
console.log("create array by slipt method" , d);

// access  to array
console.log('\n access array by index and using for loop');
for (let i = 0; i < c.length; i++) {
    console.log(c[i]);
} 
// Aggregate Array Operations
console.log('\n Aggregate Array Operations');
// copy array (shallow copy )
let cp = b;
b[0]= 10 ;
console.log('shallow copy' ,cp[0],b[0]);

// copy array (deep copy)
let cp2  = [];
for (let i = 0; i < b.length; i++) {
      cp2[i] = b[i];
}
b[0] = 20;
console.log('deep copy' ,cp2[0],b[0]);

// Searching for a Value
// using indexof
console.log('\n using indexOf', b.indexOf(2));
const newArray = b.filter(item => {
      return item >=3 
});

// convert array to string
const bstr = b.toString(' ');
console.log('str:' , bstr);
console.log('\n concat array ::' ,b.concat(c));

// Adding and Removing Elements from the Middle of an Array
console.log('\n remove and adding array' , b.slice(3,0,str));
// push pop reverse 
b.pop();
console.log('\n pop' , b);

b.push(7);
console.log('\n push' , b);

b.reverse();
console.log('\n reverse' , b);
