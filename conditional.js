let a = 5;
let b = '5';
let c = 5;

console.log(a==b);
console.log(a===b);

// == first convert into string then compare 
// === first check data type then compare values, both conditions should be true. 

console.log("now checking with !");
console.log(a!=b); //here it will check only value 
console.log(a!==b); //here it will check data type also.

// compare operator
console.log(8>5 && 4<3);
console.log(8>5 || 4<3);


// if else conditions....
// let age = 16;

// if(age>18){
//      alert("You can vote");
// }
// else{
//      alert("You cannot vote as you are not above 18");
// }

//islogin program

// let isLogin = 1;
// if(isLogin==1){
// document.write('Login');
// }else{
//     document.write('Logout');
// }

// ternary operator
// isLoggedin = 0;
// let option = isLoggedin == 0 ? "You are logged out!" : "You are logged In!";

// document.write(option);



//nullish operator
let user;
// alert(user);  //print undefined
alert(user?? "Guest User"); //print Guest User





