function Shape(){
  
  this.getType = function(){
    return "triangle"
  }

}

function Triangle(a, b, c){
  Shape.call(this);
  
  this.a = a;
  this.b = b;
  this.c = c;
  
}


Triangle.prototype = Object.create(Shape);

// add constructor reference in triangle.prototype
Triangle.prototype.constructor = Triangle


Triangle.prototype.getPerimeter = function(){
  return this.a + this.b + this.c
}

let t = new Triangle(1, 2, 3);

console.log(t.constructor === Triangle)
console.log(Shape.isPrototypeOf(t))
console.log(t.getPerimeter());
console.log(t.getType());

//LOOPING
let list = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function shuffle(param){
   return param.sort(() => Math.random() - 0.3);
}

console.log(shuffle(list));
