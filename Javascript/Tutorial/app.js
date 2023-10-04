/*let num=30;

if(num%10==0){
    console.log("Good");
}else{
    console.log("Bad");
}*/

// let name=prompt("Enter your name");
// let age=prompt("Enter your age");
// let msg= name+" is "+age+" year old.";
// alert(msg);


//PQ-1
// let a=3,b=5,c=9;

// if(a>b && a>c){
//     console.log("a is greatest");
// }
// else if(b>c && b>c){
//     console.log("b is greatest");
// }
// else{
//     console.log("a is greatest");
// }


//PQ-2
// let num1=32,num2=45321;

// if(num1%10==num2%10){
//     console.log("same");
// }
// else{
//     console.log("different");
// }


//PQ-3
// let string=prompt("Please enter string:");

// if(string.length==0){
//     console.log("The string is Blank");
// }else{
//     console.log("The string is not blank");
// }



//PQ-4
// let string=prompt("Please enter string:");

// let index=prompt("enter the index you want to check");

// if(string[index] == string[index].toLowerCase()){
//     console.log("Character at entered index is lowercase");
// }
// else if(string[index] == string[index].toUpperCase()){
//     console.log("Character at entered index is uppercase");
// }
// else{
//     console.log("Please engter the correct value");
// }

//PQ-5
// let arr=["rishi","kesh",64,-8,90];
// let item="rishi";

// if(arr.indexOf(item)!=-1){
//     console.log("Exists");
// }else{
//     console.log(" Doesn't Exists");
// }



//MULTIPLICATION TABLE WITH FOR LOOP

// let n=prompt("Enter any number");

// for(let i=1; i<=10;i++){
//     console.log(`${n} X ${i} = ${n*i}`);
// }



//MULTIPLICATION TABLE WITH WHILE LOOP

// let n=prompt("Enter any number");

// let i=1;
// while(i<=10){
//     console.log(`${n} X ${i} = ${n*i}`);
//     i++;
// }

//Favourite movie activity:

// const favMovie = "ironman";

// let guess = prompt("Guess my favourite movie:");

// while((guess != favMovie) && (guess != "quit")){
//     guess = prompt("Wrong Guess.Please Try again.");
// }

// if(guess == favMovie){
//     console.log("Congrats!!");
// }else{
//     console.log("You quit.");
// }

//Loops in Array

// let fruits=["mango", "apple", "banana","litchi", "orange"];
// fruits.push("pineapplle");
// for(let i=0; i<fruits.length; i++){
//     console.log(i,fruits[i]);
// }

//Nested Loops with Nested Array

// let heroes=[
//     ["ironman","spiderman","thor"],
//     ["superman","batman","wonder woman"]
// ]
// for(i=0;  i<heroes.length; i++){
//     console.log(i,heroes[i]);
//     for(let j=0; j<heroes[i].length; j++){
//         console.log(`j=${j} ${heroes[i][j]}`);
//     }
// }


// let students=[["Rishi",90],["Pratik", 98],["Jay",100]];

// for(let i=0; i<students.length; i++){
//     console.log(`info of Student #${i+1}`);
//     for(let j=0; j<students[i].length; j++){
//         console.log(students[i][j]);
//     }
// }

//for of loop
// let fruits=["mango", "apple", "banana","litchi", "orange"];

// for(fruit of fruits){
//     console.log(fruit);
// }
// for(let char of "Rishi"){
//     console.log(char);
// }

//Nested for of loop

// let heroes=[
//     ["ironman","spiderman","thor"],
//     ["superman","batman","wonder woman"]
// ]

// for(list of heroes){
//     for(hero of list){
//         console.log(hero);
//     }
// }

// Object Literal

// const student={
//     name: "Rishi",
//     age: 20,
//     marks: 94.4,
//     city: "Indore"
// };

// const post={
//     username: "@rishii001_",
//     content: "This is my #firstPost",
//     likes: 150,
//     repost: 5,
//     tags: ["@delta","@apnacollege"]
// };

//Object of Object
// const classInfo={
//     Rishi:{
//         grade:"A",
//         city: "Indore"
//     },
//     Pratik:{
//         grade:"A+",
//         city: "Pune"
//     },
//     karan:{
//         grade:"O",
//         city: "Mumbai"
//     }
// };

//Array of Objects

// const classInfo=[
//     {
//         name: "Rishi",
//         grade: "A",
//         city: "Indore"
//     },
//     {
//         name: "Pratik",
//         grade: "O",
//         city: "Pune"
//     },
//     {
//         name: "Karan",
//         grade: "A+",
//         city: "Mumbai"
//     }
// ];

//Fuctions

// function hello(){
//     console.log("Hello");
// }

// function printName(){
//     console.log("Rishi!");
// }

// function print1to5(){
//     for(let i=1; i<=5; i++){
//         console.log(i);
//     }
// }
// hello();
// printName();
// print1to5();

//Q- Create a function to roll a dice.

// function rollDice(){
//     let random = Math.floor(Math.random() * 6) + 1;
//     console.log(random);
// }
// rollDice();

// function printName(name,age){
//     console.log(name,age);
// }
// printName("Rishi",19);

//try-catch

// try {
//     console.log(a);
// } catch (error) {
//     console.log(error);
// }

///array methods
//forEach
// let arr = [1,2,3,4,5];

// let print = function (el){
//     console.log(el);
// };
// arr.forEach(print);
// //or
// arr.forEach(function(el){
//     console.log(el);
// });
// //witharrow function
// arr.forEach((el) => {
//     console.log(el);
// });

//for Objects

// let arr = [{
//     name: "Rishikesh",
//     marks: 90
// },
// {
//     name: "Pratik",
//     marks: 97.7
// },
// {
//     name: "Jay",
//     marks: 89
// }];
// arr.forEach((student) => {
//     console.log(student.marks);
// });

//map()

// let num = [1,2,3,4]
// let square = num.map((el) => {
//     return el * el;
// });


// let students = [{
//     name: "Rishikesh",
//     marks: 95
// },
// {
//     name: "Pratik",
//     marks: 94.4
// },
// {
//     name: "Jay",
//     marks: 92
// }];
// let gpa = students.map((el) => {
//     return el.marks/10;
// });

// let nums = [1,2,3,4,7,8,2,9,10,12,11];
// let ans = nums.filter((el) => {
//     return el % 2 == 0;
// });

//DOM
//onclick event

// let btns = document.querySelectorAll('button');

// for(btn of btns){
//     // btn.addEventListener("click",sayHello);
//     // btn.addEventListener("click",sayName);
//     btn.addEventListener("dblclick",sayName);
// }

// function sayHello(){
//     alert("Hello");
// }
// function sayName(){
//     alert("Rishi!");
// }
// let box = document.querySelector('.box');
// let box1 = document.querySelector('.box1');
// let box2 = document.querySelector('.box2');
// let box3 = document.querySelector('.box3');
// let box4 = document.querySelector('.box4');

// function round(){
//     this.style.borderRadius = "50%";
//     this.style.backgroundColor = "red";

// }
// function square(){
//     this.style.borderRadius = "0%";
//     this.style.backgroundColor = "white";
// }

// box1.addEventListener("click",round);
// box2.addEventListener("click",round);
// box3.addEventListener("click",round);
// box4.addEventListener("click",round);

// box1.addEventListener("dblclick",square);
// box2.addEventListener("dblclick",square);
// box3.addEventListener("dblclick",square);
// box4.addEventListener("dblclick",square);

//Keyboard Event

// let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(){
//     console.log("key '"+event.key+"' was pressed");
// });
// inp.addEventListener("keyup",function(){
//     console.log("Key was released.");
// });

// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function(){
//     console.log("div was clicked");
// });

// ul.addEventListener("click", function(event){
//     event.stopPropagation();
//     console.log("ul was clicked");
// });

// for(li of lis){
//     li.addEventListener("click", function(event){
//         event.stopPropagation();
//         console.log("li was clicked");
//     });
// }

//Promises : async and await functions

// let h1 = document.querySelector("h1");

// function changeColor (color,delay) {
//     return new Promise((resolve,reject) =>{
//         setTimeout(() => {
//             let rannum = Math.floor(Math.random() * 10) + 1;
//             if(rannum < 2){
//             reject("Promise was rejected");
//             }
//             h1.style.color = color;
//             resolve(color," was applied");
//         },delay);
//     })
// }

// async function  demo() {
//     await changeColor("red",1000);
//     await changeColor("orange",1000);
//     await changeColor("green",1000);
//     await changeColor("yellow",1000);
//     await changeColor("blue",1000);
// }

//First API Request Using Fetch

let url = "https://catfact.ninja/fact";
// let f1 = document.querySelector(".fact1");
// let f2 = document.querySelector(".fact2");

// fetch(url)
// .then((res) => {
//     return res.json();
// })
// .then((data) => {
//     console.log("Data1: ",data.fact);
//     f1.innerText = `1) ${data.fact}`;
//     return fetch(url);
// })
// .then((res) => {
//     return res.json();
// })
// .then((data2) => {
//     console.log("Data2: ",data2.fact);
//     f2.innerText = `2) ${data2.fact}`;
// })
// .catch((err) => {
//     console.log("ERROR: ",err);
// })

//With async and await

// async function getFacts() {
//     try{
//         let res = await fetch(url);
//         let data1 = await res.json();
//         f1.innerText = `1) ${data1.fact}`;

//         let res2 = await fetch(url);
//         let data2 = await res2.json();
//         f2.innerText = `2) ${data2.fact}`;
//     } catch(e) {
//         console.log("ERROR: ",e);
//     }
// }
// getFacts();

//using axios cat fact api
// let btn = document.querySelector(".btn1");
// let p = document.querySelector(".fact1");

// btn.addEventListener("click", async () => {
//     let fact = await getFacts();
//     console.log(fact);
//     p.innerText = fact;
// });
// async function getFacts() {
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     } catch(e) {
//         console.log("ERROR: ",e);
//         return "NO FACT FOUND"
//     }
// }

//dogapi

// let url2 = "https://dog.ceo/api/breeds/image/random";
// let btn = document.querySelector(".btn1");
// let img = document.querySelector(".result");

// btn.addEventListener("click", async () => {
//     let link = await getImage();
//     let img = document.querySelector(".result");
//     img.setAttribute("src", link);
// });
// async function getImage() {
//     try{
//         let res = await axios.get(url2);
//         return res.data.message;
//     } catch(e) {
//         console.log("ERROR: ",e);
//         return "NO IMAGE FOUND"
//     }
// }

//get universities

let url3 = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("#btn1");

btn.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    
    let colArr = await getColleges(country);
    show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    list.innerText = "";

    for(col of colArr) {
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try{
        let res = await axios.get(url3+country);
        return res.data;
    } catch(e) {
        console.log(e);
        return [];
    }
}