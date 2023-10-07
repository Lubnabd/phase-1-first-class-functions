function receivesAFunction(callback) {
  callback();
}
console.log(receivesAFunction);

function myCallback() {}
console.log("Callback function has been called!");

//QUESTION 2 

function returnsANamedFunction() {
   
  function namedFunction() {
    console.log("This is my named function");

  }
return namedFunction;

};

const myNamedFunction = returnsANamedFunction();

// Now you can use the named function
myNamedFunction(); 

//QUESTION 3 

function returnsAnAnonymousFunction() {
    return function() {
      console.log("This is an anonymous function!");
    };
  }

  const myAnonymousFunction = returnsAnAnonymousFunction();

myAnonymousFunction();