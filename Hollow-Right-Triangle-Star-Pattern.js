let n = 9;

let string = "";

for (let i = 1; i <= n; i++) {

  for (let j = 1; j <= i; j++) {

    if (j==1|| i==j || i==n ) {
      string += " * ";
    }
    else {
      string += "   ";
    }

  }
  string += "\n";
}
console.log(string);

//output :

// * 
// *  * 
// *     * 
// *        * 
// *           * 
// *              * 
// *                 * 
// *                    * 
// *  *  *  *  *  *  *  *  * 


