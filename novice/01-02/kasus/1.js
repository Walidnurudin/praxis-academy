// Write a JavaScript program that accept two integers and display the larger

let a = prompt("masukan nilai a", "0");
let b = prompt("masukan nilai b", "0");

if(parseInt(a) > parseInt(b)){
  console.log("The larger of "+ a + " and "+ b + " is "+ a + ".")
}else if(parseInt(a) < parseInt(b)){
  console.log("The larger of " + a + " and " + b + " is " + b + ".")
}else{
  console.log("The values " + a + " and "+ b + " are equal.")
}