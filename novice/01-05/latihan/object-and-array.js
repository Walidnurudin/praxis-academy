// SUM THE PROPERTIES
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(param){
  let total = 0;
  for(let gaji of Object.values(param)){
    total += gaji;
  }
  return total;
}

alert( sumSalaries(salaries) ); // 650


// COUNT PROPERTIES
let user = {
  name: 'John',
  age: 30
};

function count(obj){
  return Object.keys(obj).length;
}

alert( count(user) ); // 2
