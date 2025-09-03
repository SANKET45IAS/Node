/**
 * @param {{ name: string, age: number }} obj
 */
function schema(obj) {
  console.log("Inside schema");
  console.log(obj);
}

schema({ name: "Sanket", age: 20 }); 
