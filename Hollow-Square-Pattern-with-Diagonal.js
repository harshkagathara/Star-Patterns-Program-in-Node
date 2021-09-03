let n = 9;

let string = "";

for (let i = 0; i <= n; i++) {
  for (let j = 0; j <= n; j++) {

    if (i == n || i == 0 || i == j || j == n - i + 0 || j == 0 || j == n) {
      string += " * ";
    }
    else {
      string += "   ";
    }
  }
  string += "\n";
}
console.log(string);


//Output :-

// *  *  *  *  *  *  *  *  *  * 
// *  *                    *  * 
// *     *              *     * 
// *        *        *        * 
// *           *  *           * 
// *           *  *           * 
// *        *        *        * 
// *     *              *     * 
// *  *                    *  * 
// *  *  *  *  *  *  *  *  *  * 

