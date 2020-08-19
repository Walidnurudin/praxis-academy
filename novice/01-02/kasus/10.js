// Write a JavaScript program to construct the following pattern, using a nested for loop.
// *  
// * *  
// * * *  
// * * * *  
// * * * * * 

let chr;

for(let i = 0; i <= 6; i++){
    for(let j = 0; j < i; j++){
      chr += "*";
    }
  console.log(chr);
  chr="";
}