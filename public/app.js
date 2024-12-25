// https://github.com/iamshaunjp/typescript-tutorial/blob/lesson-2/sandbox.ts 
// Lecture 2
// const character = 'luigi';
// console.log(character);
// const inputs = document.querySelectorAll('input');
// inputs.forEach(input => {
//   console.log(input);
// });
// Lecture 3
// //Type Script infers the type
// let character="mario"
// let age=30
// let isBlackBelt=false
// //Type Error
// // character=20;
// character="luigi"
// //Error
// // age='yoshi'
// age=40
// // Error
// // isBlackBelt="yes"
// isBlackBelt=true
// //Functions Arguments types
// //Without type declaration
// // const circ=(diameter)=>{
// //   return diameter*Math.PI
// // }
// //With type declaration argument:type
// const circ=(diameter:number/*number/string/boolean*/ )=>{
//   return diameter*Math.PI
// }
// //Won't produce error as the type is no declared for the argument
// //Without type specified
// // console.log(circ("hello"))
// //Error with type specified so we use exact type
// console.log(circ(7.5))
//Lecture 4
// // Array
// let names=["luigi","mario","yoshi"]
// // Error can't change array type too
// // names="hi"
// //We can add strings
// names.push("toad")
// // Causes error as array takes only strings
// // names.push(23)
// // Can't assign other than string
// // names[0]=23
// let numbers=[10,20,30,40]
// numbers.push(50);
// // Error can't push other than number
// // numbers.push("shaun")
// let mixed=["ken",4,"chun-li",8,9];
// mixed.push("ryu");
// mixed.push(10);
// // Error can't add other type than string and number
// // mixed.push(true)
// // Can change or assign any values to number or string
// // Objects
// // each property will act as a variable so can't change it's type
// let ninja={
//   name:"mario",
//   belt:"black",
//   age:30
// };
// ninja.age=40
// ninja.name="ryu"
// // Error as the age is of type number
// // ninja.age="30"
// // We can't add extra properties to the object that we begin with
// // ninja.skills=["Fighting","sneaking"]
// //But we can update the object with same properties
// // If we comment out one property it gives error and if we change type of property gives error
// // and adding a property other than specified gives error
// //Object must be of same structure
// ninja={
//   name:"yoshi",
//   belt:"orange",
//   age:50 
// }
// //Lecture 5
// // Explicit Types
// // Assigning type of variable
// let character:string;
// let age: number;
// let isLoggedIn:boolean ;
// // Error as we assigned that this variable is of type number
// // age="luigi"
// // Arrays
// // let ninjas: string[];
// // with the above the  empty array is not intialized so we can't push to that directly
// // ninjas.push("hi")
// //By this way we are intializing an empty array
// let ninjas: string[]=[];
// ninjas.push("hi")
// //Union types
// // pipe symbol is used and array can take only one the specified types
// let mixed:(number|boolean|string)[]=[];
// mixed.push("hello")
// mixed.push(20)
// mixed.push(false)
// console.log(mixed)
// // Can be used with normal variables too
// let uid:number|string;
// uid=123
// uid="123"
// // Error as the type of uid is not boolean
// // uid=false
// // Objects
// let ninjaOne:Object;
// ninjaOne={
//   name:"yoshi",
//   age:30
// }
// // As per the video can't assign number,string,boolean to object type and can assign array without error as it's of object type
// //But i am not getting error with number,string and boolean
// ninjaOne=4;
// ninjaOne="hi";
// ninjaOne=true;
// console.log(ninjaOne)
// ninjaOne=["hi",2,3,true];
// let ninjaTwo:{
//   name:string,
//   age:number,
//   beltColor:string
// }
// // while assigining object all properties must present and types of each property must match
// // Can't add extra property too
// ninjaTwo={
//   name:"hi",
//   age:30,
//   beltColor:"black"
// }
// Lecture 6
// // Dynamic Any Type
// // let age:any;
// // or  both are ok
// let age:any=25;
// age=30
// age="hi"
// age=true;
// age=[1,"hi"]
// age={name:"mou"}
// //arrays
// //Can push any type of values
// let mixed:any[]=[];
// mixed.push(10)
// mixed.push("hi")
// mixed.push(true)
// // Objects
// // Can declare each property type to any and can assign any type
// let ninja:{
//   name: any,
//   age:any
// }
// ninja={
//   name:"Yoshi",
//   age:25
// }
// ninja={
//   name:25,
//   age:"Yoshi"
// }
//Lecture 7
// console.log("Lecture 7 check include property")
// Lecture 8
// let greet = ()=> {
//   console.log("hello , world");
// }
// Error if type is changed
// greet="hi"
// Explicit type
// let greet:Function;
// greet=()=>{
//   console.log("Hello World");
// }
// const add=(a:number,b:number,c/*?*/:number|string=10)=>{
//   console.log(a+b);
//   console.log(c);//Undefinedif default value is not given else default value
// }
// add(5,10)
// // let minus=(a:number,b:number)=>{
// //   return a-b;
// // }
// // //Type of result will be the type of return type and can't change later
// // let result=minus(20,10)
// // Error
// // result="10"
// // or we can also use explicit return type like below and 
// // we can use void as return type if functino won't return anything
// let minus=(a:number,b:number):number=>{
//   return a-b;
// }
// //Type of result will be the type of return type and can't change later 
// let result=minus(20,10)
// Lecture 9 missed code it's in note book about aliases
// Lecture 10
// // Function signatures
// let greet:(a : string, b: string)=>void;
// greet=(name:string,greeting:string)=>{
//   console.log(`${name} says ${greeting}`)
// }
// let logDetails:(obj:{name:string,age:number})=>void;
// // Lecture 9 use this in below in place of object
// type person={name:string,age:number}
// // Must match type and the property names
// logDetails=(ninja:{name:string,age:number})=>{
//   console.log(``)
// }
// Lecture 11
// // The DOM and Type Casting we cahnge sandbox.ts to app.ts in here and also we added app.js to html file in place of sandobox.js
// // // selecting all anchor tags only one that is in bottom in html page we have
// // const anchor=document.querySelector('a');
// // // Error as some time the thml page may not contain anchor tag 
// // // console.log(anchor.href)
// // if(anchor){
// // console.log(anchor.href)
// // }
// // Let us take form tag
// // Exclamatory mark is that we are saying that it exists
// // May have multiple forms so we use class instead
// // const form=document.querySelector('form')!;
// // now the type of this is element not form hover and check
// // const form=document.querySelector('.new-item-form')!;
// // to overcome above issue to make variable type form we use "Type Casting" and now it stores the type as Html form element
// const form=document.querySelector('.new-item-form') as HTMLFormElement;
// // console.log(form.children);
// //  inputs
// const type=document.querySelector('#type') as HTMLSelectElement;
// const tofrom=document.querySelector('#tofrom') as HTMLInputElement;
// const details=document.querySelector('#details') as HTMLInputElement;
// const amount=document.querySelector('#amount') as HTMLInputElement;
// // So now we got the field values and now we add event to form submitting that is printing them to console(
// form.addEventListener('submit',(e: Event)=>{
//     // Prevents page refreshing
//     e.preventDefault();
//     console.log(
//         type.value,
//         tofrom.value,
//         details.value,
//         // amount.value //javascript treating it as string so we convert it to number
//         amount.valueAsNumber // color blue for number in console
//     );
// })
// Lecture 12
// // Classes
// class Invoice{
//     // This shows errors as we are not intilaizing values so we construct a constructor to intialize those values
//     client: string;
//     details:string;
//     amount:number;
//     constructor(c:string,d:string,a:number){
//         this.client=c;
//         this.details=d;
//         this.amount=a;
//     }
//     // simple method to return these details
//     format(){
//         return `${this.client} owes $${this.amount} for ${this.details}`
//     }
// }
// // Object creation 
// const invOne=new Invoice("mario","Work on mario website",100);
// const invTwo=new Invoice("luigi","Work on luigi website",200);
// console.log(invOne,invTwo)
// // Allow only Invoice type objects and won't allow other type to array
// let invoices:Invoice[]=[];
// invoices.push(invOne);
// invoices.push(invTwo);
// // Variables declare in class are public so we can change them
// invOne.client='yoishi';
// invTwo.amount=400;
// console.log(invoices);
// const form=document.querySelector('.new-item-form') as HTMLFormElement;
// //  inputs
// const type=document.querySelector('#type') as HTMLSelectElement;
// const tofrom=document.querySelector('#tofrom') as HTMLInputElement;
// const details=document.querySelector('#details') as HTMLInputElement;
// const amount=document.querySelector('#amount') as HTMLInputElement;
// form.addEventListener('submit',(e: Event)=>{
//     // Prevents page refreshing
//     e.preventDefault();
//     console.log(
//         type.value,
//         tofrom.value,
//         details.value,
//         amount.valueAsNumber 
//     );
// })
// Lecture 13
// // Private,public,ReadOnly
// // classes
// class Invoice {
//     // readonly client: string;
//     // private details: string;
//     // public amount: number;
//     // constructor(c:string,d:string,a:number){
//     //             this.client=c;
//     //             this.details=d;
//     //             this.amount=a;
//     //         }
//     // This is better way to do above stuff
//     constructor(
//       readonly client: string, 
//       private details: string, 
//       public amount: number,
//     ){}
//     format() {
//         // this.client=// error as readonly can't modify or assign value even in class
//       return `${this.client} owes £${this.amount} for ${this.details}`;
//     }
//   }
//   const invOne = new Invoice('mario', 'work on the mario website', 250);
//   const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
//   let invoices: Invoice[] = [];
//   invoices.push(invOne)
//   invoices.push(invTwo);
//   invoices.forEach(inv => {
//     // inv.client="oury" // Error as readonly can't modify
//     console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());// we can't acess inv.details as it's private
//   })
//   const form = document.querySelector('.new-item-form') as HTMLFormElement;
//   console.log(form.children);
//   // inputs
//   const type = document.querySelector('#type') as HTMLInputElement;
//   const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
//   const details = document.querySelector('#details') as HTMLInputElement;
//   const amount = document.querySelector('#amount') as HTMLInputElement;
//   form.addEventListener('submit', (e: Event) => {
//     e.preventDefault();
//     console.log(
//       type.value, 
//       tofrom.value, 
//       details.value, 
//       amount.valueAsNumber
//     );
//   });
// Lecture 14 
// Modules
// import {Invoice} from './Classes/Invoice.js'
//   const invOne = new Invoice('mario', 'work on the mario website', 250);
//   const invTwo = new Invoice('luigi', 'work on the luigi website', 300);
//   let invoices: Invoice[] = [];
//   invoices.push(invOne)
//   invoices.push(invTwo);
//   invoices.forEach(inv => {
//     console.log(inv.client, inv.amount, inv.format());
//   })
//   const form = document.querySelector('.new-item-form') as HTMLFormElement;
//   console.log(form.children);
//   // inputs
//   const type = document.querySelector('#type') as HTMLInputElement;
//   const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
//   const details = document.querySelector('#details') as HTMLInputElement;
//   const amount = document.querySelector('#amount') as HTMLInputElement;
//   form.addEventListener('submit', (e: Event) => {
//     e.preventDefault();
//     console.log(
//       type.value, 
//       tofrom.value, 
//       details.value, 
//       amount.valueAsNumber
//     );
//   });
// Lecture 15
// Interfaces
// interface IsPerson{
//     name:string;
//     age:number;
//     speak(a:string):void;
//     spend(a:number):number;
// }
// let me:IsPerson={
//     name:"Shaun",
//     age:30,
//     speak(text: string):void{
//         console.log(text)
//     },
//     spend(amount:number):number{
//         console.log("IsSpent",amount)
//         return amount;
//     },
// }
// let someOne:IsPerson;
// const greetPerson=(person:IsPerson)=>{
//     console.log("hello",person.name)
// }
// greetPerson(me)
// Lecture 16
// import { Invoice } from './classes/Invoice.js';
// import { Payment } from './classes/Payment.js';
// import { HasFormatter } from './interfaces/HasFormatter.js';
// // let docOne: HasFormatter;
// // let docTwo: HasFormatter;
// // docOne = new Invoice('yoshi', 'web work', 250);
// // docTwo = new Payment('mario', 'plumbing', 200);
// // // ONly objects that implements this interface can be pushed in here
// // let docs: HasFormatter[] = [];
// // docs.push(docOne);
// // docs.push(docTwo);
// // console.log(docs)
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);
// // inputs
// const type = document.querySelector('#type') as HTMLInputElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();
//   let doc: HasFormatter;
// //   Checking whether it's of type invoice or payment and storing objects accordingly
//   if (type.value === 'invoice') {
//     doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
//   } else {
//     doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
//   }
//   console.log(doc);
// });
// Lecture 17
// Rendering a HTML Template
// import { Invoice } from './classes/Invoice.js';
// import { ListTemplate } from './Classes/ListTemplate.js';
// import { Payment } from './classes/Payment.js';
// import { HasFormatter } from './interfaces/HasFormatter.js';
// const form = document.querySelector('.new-item-form') as HTMLFormElement;
// console.log(form.children);
// // inputs
// const type = document.querySelector('#type') as HTMLInputElement;
// const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
// const details = document.querySelector('#details') as HTMLInputElement;
// const amount = document.querySelector('#amount') as HTMLInputElement;
// // List template instance
// // const ul=document.querySelector("ul")!;
// // Will get error without "!" in above statement as it can be null
// // const li=new ListTemplate(ul);
// const ul=document.querySelector(".item-list") as HTMLUListElement;
// const list=new ListTemplate(ul);
// form.addEventListener('submit', (e: Event) => {
//   e.preventDefault();
//   let doc: HasFormatter;
//   if (type.value === 'invoice') {
//     doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
//   } else {
//     doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
//   }
//   list.render(doc,type.value,'end');
// });
// Lecture 18
// // Generics
// // const addUID=(obj: object)=>{
// //     const uid=Math.floor(Math.random()*100);
// //     // ... means spread operator means it create new object from the existing one
// //     return {...obj,uid}// OVERWRITES UID PROPERTY OR adds new property uid with value of uid
// // }
// // let docOne= addUID({name:'yoishi',age:40});
// // console.log(docOne);
// // console.log(docOne.uid)
// // Error as we didn't specified type of object earlier in addUID method parameter 
// // so it can't recognize name property
// // console.log(docOne.name)
// // To Overcome above problem now we add generics to above code
// // Here T captures what ever item we pass  i.e what properties in the object
// // const addUID=<T extends object>(obj:T)=>{
// //     const uid=Math.floor(Math.random()*100);
// //     return {...obj,uid}
// // }
// // let docOne= addUID({name:'yoishi',age:40});
// // Using above with only T we can do foolowing but don't want to allow all 
// // so we add "extends object" in the generic
// // let docTwo=addUID("hi")  // Now we get error as parameter is of type object
// // And also now we can specify the specific type of object
// // must contain object with parameter then only we can pass as parameter
// // const addUID=<T extends {name:string}>(obj:T)=>{
// //     const uid=Math.floor(Math.random()*100);
// //     return {...obj,uid}
// // }
// // let docOne= addUID({name:'yoishi',age:40});
// // console.log(docOne);
// // console.log(docOne.uid)
// // console.log(docOne.age)
// // console.log(docOne.name)
// // With interfaces
// // We are saying that we are going to pass some data based on that get the type for that variable
// interface Resource <T> {
//     uid: number;
//     resourceName: string;
//     data: T; // We don't know the type we are passing to this so we assign generic
// }
// // const docThree: Resource<String>={
// //     uid:1,
// //     resourceName:"person",
// //     // data:{name:"mou"},// error as data is of type string can't take object
// //     data:"Shaun"
// // }
// const docThree: Resource<object>={
//     uid:1,
//     resourceName:"person",
//     data:{name:'shaun'}
// }
// const docFour: Resource<string[]>={
//     uid:2,
//     resourceName:"Shopping List",
//     data: ["bread","milk"]
// }
// console.log(docThree,docFour)
// Lecture 19
// Enums
// enum ResourceType { BOOK, AUTHOR, FILM, DIRECTOR };
// interface Resource<T> {
//   uid: number;
//   resourceType: ResourceType;
//   data: T;
// }
// const docOne: Resource<object> = {
//   uid: 1,
//   // This helps in storing number/index of this 
//   resourceType: ResourceType.BOOK,
//   data: { title: 'name of the wind' }
// }
// const docTwo: Resource<object> = {
//   uid: 10,
//   resourceType: ResourceType.DIRECTOR,
//   data: { title: 'name of the wind' }
// }
// console.log(docOne);
// console.log(docTwo);
// lecture 20
// Tuples
// // These data manipulation within types of array is ok with arrays but
// // In tuples the types in position of array is fixed
// let arr=['ryu',25,true];
// arr[0]=false
// arr[1]='yoshi'
// arr=[30,false,'yoshi']
// // Tuple has to be specified with explicit types as mentioned in here
// let tup:[string,number,boolean]=["ryu",40,true];
// // let tup:[string,number,boolean]=[50,40,true];//This gives error as the first index must be string but number given
// // tup[0]=10;// Error
// tup[0]="shaun"// allowed as o index is string type
// // we use this in our code
// Use capital letters for folder names to get rid of errors
import { Invoice } from './Classes/Invoice.js';
import { Payment } from './Classes/Payment.js';
import { ListTemplate } from './Classes/ListTemplate.js';
const form = document.querySelector('.new-item-form');
// inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
// list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    // Tuple is being used in here
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
    if (type.value === 'invoice') {
        // ... separator spread the values in here and pass parameters to constructor
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, 'end');
});
