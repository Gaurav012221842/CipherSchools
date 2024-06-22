var y=15;
{
    const y=20;
    console.log(y);
}
console.log(y);
function add(a,b){
    return a+b;

}
console.log(add(10,20));

const x=(x,y)=>x+y;
console.log(x(10,20));

const q1=["jan","feb","sep"]
const q2=[ "mar","apr","may"];
const q3=[ "jun","jul","aug"];
const q4=[ "oct","nov","dec"];
const year=[...q1,...q2,...q3,...q4];
console.log(year);

const maxnumber=[1,3,4,5,2,3,44,64];
const yy=Math.max(...maxnumber);
console.log(yy);



const sum=[10,11,13,14,15,16];
let sm=0;
for(let num of sum){
    sm=sm+num;
}
console.log(sm);


const fruits=new Map([["apples",500],["banana",400]]);
console.log(fruits);
console.log(fruits.get("apples"));

class Car{
    constructor(name,mfgyear){
        this.name=name;
        this.mfgyear=mfgyear;
    }
}

const mycar1=new Car("Mercedes",2022);
const mycar2=new Car("BMW",2021);
console.log(mycar1,mycar2);
const myPromise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log("This is inside Promise");
        resolve();
    },2000);
});
console.log(myPromise);

const person={ firstName:"John",
    lastname: "Doe",
    age: 30
    };
    let id=Symbol("id");
    person[id]=13923;
    console.log(person);


const addTwoNumbers=(...args)=>{
    let sum=0;
    for(let arg of args){
        sum+=arg;
    }
    return sum;
};
console.log(addTwoNumbers(14,4,32));



