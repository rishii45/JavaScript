//Q1

// let arr=[1,2,3,4,3,2,5,3,6,8,9,2,4];
// num=3;

// for(let i=0; i<arr.length; i++){
//     if(arr[i]==num){
//         arr.splice(i,1);
//     }
// }
// console.log(arr);

//Q2

// let num=287152;
// let count=0;

// let copy=num;
// while(copy>0){
//     count++;
//     copy=Math.floor(copy/10);
// }
// console.log(count);

//Q3

// let num=287152;
// let sum=0;

// let copy=num;
// while(copy>0){
//     let digit = copy%10;
//     sum += digit;
//     copy = Math.floor(copy/10);
// }
// console.log(sum);

//Q4

// let n=3;
// let fact=1;

// for(let i=1; i<=n; i++){
//     fact *= i;
// }
// console.log(`factorial of ${n} is ${fact}`);

//Q4

// let arr=[1,2,3,4,67,566,7,9];
// let largest=0;

// for(let i=0; i<arr.length; i++){
//     if(largest< arr[i]){
//         largest=arr[i];
//     }
// }
// console.log(largest);

//Part-6
//Q1
// let array = [1,2,3,4,5,6,7,8,9];
// let num=4;

// function getElements(array,num){
   
//     for(let i=0; i<array.length; i++){
//         if(array[i] > num){
//             console.log(array[i]);
//         }
//     }
// }
// getElements(array,num);

//Q2
// let str = "abcdacdebfaddbbef";

// function getUnique(){
//     let ans = "";
//     for(let i = 0; i < str.length; i++){
//         let currChar = str[i];
//         if(ans.indexOf(currChar)==-1){
//             ans += str[i];
//         }
//     }
//     console.log(ans);
// }
// getUnique();

//Q3

// let country = ["Australia","Germany","India","United States of America"];
// let ansidx = 0;
// function getCountry(country){
    
//     for(let i = 0 ; i < country.length; i++){
//        let anslen = country[ansidx].length;
//        let currlen =country[i].length;
//         if(currlen > anslen){
//             ansidx = i;
//         }
//     }
//     console.log(country[ansidx]);
// }
// getCountry(country);

//Q4

// let str = "Rishkesh";


// function countVowels(str){
//     let count = 0;
//     for(let i=0; i<str.length; i++){
//         if(str.charAt(i)=='a' || str.charAt(i)=='e' || str.charAt(i)=='i' || str.charAt(i)=='o' || str.charAt(i)=='u'){
//             count++;
//         }
//     }
//     console.log(count);
// }
// countVowels(str);

//Q5
// let start,end;

// function randomNum(start,end){
//     let diff = end-start+1;
//     let random = Math.floor(Math.random() * diff )+start;
//     console.log(random);
// }

// randomNum(100,200);

//P7
//Q1
// let arr=[5,5,5,5,5,5];

// const arrayAverage = (arr) => {
//     let sum=0;
//     for(let number of arr){
//         sum += number;
//     }
//     return sum/arr.length;
// }

//Q2
// const Even = (num) => {
//     if(num%2 == 0){
//         console.log("The number is even");
//     } else {
//         console.log("The number is odd");
//     }
// }

//Q3

// const object ={
//     message: "Hello, World",
//     logMessage() {
//         console.log(this.message);
//     }
// };
// setTimeout(object.logMessage,3000);

//Q4
// let length = 4;
//  function callback() {
//     lenght = 5;
//     console.log(this.length);
//  }
//  const object = {
//     leght: 5,
//     method(callback){
//         callback();
//     },
//  };

//  object.method(callback,1,3);

//P8
//Q1
// let num = [1,2,3,4];


// let ans = (num) => {
//    let sum = 0;
//    for(let i=0; i<num.length; i++){
//       sum += num[i]*num[i];
//    }
//    return sum/num.length;
// };
//OR
// let num = [1,2,3,4];
// const square = num.map((el) => {
//    return el*el;
// });
// console.log(square);

// const sum = square.reduce((sum,el) => (sum+el));
// console.log(sum);

// let avg = sum/num.length;
// console.log(avg);

//Q2
// let arr = [1,2,3,4,5,6];
// console.log(arr.map((el) => {return el+5}));

//Q3
// let fruits = ["mango","apple","banana","grapes"];
// let newfruits = fruits.map((el) => {
//    return el.toUpperCase();
// });

//Q4

// let doubleAndreturnArgs = (arr,...args) => [...arr,...args.map((el) => el*2)];

//Q5

// const mergeObjects = (obj1,obj2) => ({...obj1,...obj2});
// console.log(mergeObjects({a: 1,b: 2,c: 3},{d: 4,e: 5,f: 6}));

//P9
// //Q1
// let username = document.createElement('input');
// let btn = document.createElement('button');

// btn.innerText = "Click Me!!";
// document.querySelector('body').append(username);
// document.querySelector('body').append(btn);

// //Q2
// username.setAttribute("placeholder","username");
// btn.setAttribute("id","btn");

// //Q3
// document.querySelector("#btn").style.backgroundColor = "#ffff00";
// document.querySelector("#btn").style.color = "#ffffff";

// //Q4

// let heading = document.createElement("h1");
// heading.innerText = "DOM Practice";
// heading.style.textDecoration = "1px solid black underline";
// heading.style.color = "purple";
// document.querySelector('body').prepend(heading);

// //Q5

// let para = document.createElement("p");
// para.innerHTML = "Apna College <b>Delta</b> Practice";
// document.querySelector('body').append(para);

//P10
//Q1
// let user = document.querySelector("#user");
// let pass = document.querySelector("#pass");
// let btn = document.querySelector("button");
// let body = document.querySelector("body");

// btn.addEventListener("mouseout",function(){
//     console.log("mouse was out");
// })
// user.addEventListener("keypress", function(){
//     console.log(`'${event.key}' was pressed`)
// })

//Q2
// let btn = document.createElement("button");

// btn.innerText = "Register"
// function changeBG(){
//     this.style.backgroundColor = "green";
// }

// btn.addEventListener("click",changeBG);

// document.querySelector("body").append(btn);

//Q3
let div = document.createElement("div");
div.style.border = "1px solid black";
div.style.height = "50px"
document.querySelector("body").append(div);


let inp = document.createElement("input");
inp.placeholder = "Enter you name";
document.querySelector("body").append(inp);

inp.addEventListener("input",function(){
    div.innerText = inp.value;
})

