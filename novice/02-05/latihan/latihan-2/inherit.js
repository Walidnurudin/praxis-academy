// 1
class ValidationError extends Error {
    constructor(message){
        super(message);
        this.name = this.constructor.name
    }
}

function test(){
  throw new ValidationError("Oops!");
}

try {
  alert("try");
  test();
}catch(err){
  alert(err.message);
  alert(err.name);
  alert(err.stack);
}


// 2
class FormatError extends SyntaxError {
  constructor(message){
    super(message)
    this.name = this.constructor.name;
  }
};

let err = new FormatError("formatting error!");

alert(err.message); // formatting error!
alert(err.name); // FormatError
alert(err.stack); // stack

alert(err instanceof FormatError); // true
alert(err instanceof SyntaxError); // true
