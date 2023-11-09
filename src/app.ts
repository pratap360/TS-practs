// classes
import {Invoice} from './classes/Invoices.js';
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js'

// let docOne:HasFormatter
// let docTwo:HasFormatter

// docOne = new Invoice('pratap','dev',220)
// docTwo = new Payment('Arusho','singer',240)

// let docs:HasFormatter[] = []

// docs.push(docOne)
// docs.push(docTwo)

// console.log(docs);



const invOne = new Invoice('mario', 'work on the mario website', 250);
const invTwo = new Invoice('luigi', 'work on the luigi website', 300);

let invoices: Invoice[] = [];
invoices.push(invOne)
invoices.push(invTwo);

invoices.forEach(inv => {
  console.log(inv.client, /*inv.details,*/ inv.amount, inv.format());
})



const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;


// list ListTemplate instance 
const ul = document.querySelector('ul')!
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

let value : [string,string,number]

value = [tofrom.value,details.value,amount.valueAsNumber]


let doc: HasFormatter
if (type.value === 'invoice'){
  doc = new Invoice(...value)
}else{
  doc = new Payment(...value)
}

list.render(doc,type.value,'end')

// generics 

const addUID = (obj:object) => {
  let uid = Math.floor(Math.random()*100);
  return {...obj,uid};
}

let docOne = addUID ({name:'pratap',age:22});

  console.log(docOne);
  // console.log(
  //   type.value, 
  //   tofrom.value, 
  //   details.value, 
  //   amount.valueAsNumber
  // );
});

// generics with interface 

interface Res<T>{
  uid:number;
  resName:string;
  data:T;
}

const docThree:Res<object> = {
  uid:2,
  resName:'Admi',
  data:{name:'Pratap',age:22}
}

const docFour : Res<string[]> = {
  uid:3,
  resName:'list',
  data:['1','3','5']
}

console.log(docFour,docThree);


// ? interfaces 

interface IsPerson {
  name : string,
  age: number,
  speak(a:string):void,
  spend(a:number):number
}

const me : IsPerson =  {
  name:'pratap',
  age:22,
  speak(text:string):void{
    console.log(text);
  },
  spend(amt:number):number{
    console.log('maine kharca kiha',amt);
    return amt
  }
};

// enum 

enum ResType {book,author,flim,director,person}

interface Reso<T>{
  uid:number;
  resType:ResType;
  data:T;
}

const docSix: Reso<object> ={
  uid:1,
  resType:ResType.author,
  data:{title:'I'}
}


const docTen: Reso<object> = {
  uid:2,
  resType:ResType.author,
  data:{name:'mrparuiweb'}
}

console.log(docSix,docTen);
