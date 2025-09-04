/**
 * @param {{ name: string, age: number }} obj
 */
function schema(obj) {
  console.log("Inside schema");
  console.log(obj);
}

schema({ name: "Sanket", age: 20 }); 


//Middleware 'next()'
function out() {
  console.log("Out");
}

// middleware-style function
function into(next) {
  console.log("Into");  // do something before
  next();               // call the next middleware
  console.log("Back");  // do something after
}

// passing out as next
into(out);


"Anology inside the methon next() call internally next function code if call then it move req,res else return to where it call"
// function next(){
//   move to req,res resq();
// }
// next if click execute
// resq(){
//   return response
// }
// else
// return where it call 
