let n = 9;

let string = "";

for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= i - 1; j++) {
    string += "   ";
  }
  for (let k = 1; k <= n; k++) {
    string += " * ";
  }
  string += "\n";
}
console.log(string);



//Output:

//                         *  *  *  *  *  *  *  *  * 
//                       *  *  *  *  *  *  *  *  * 
//                    *  *  *  *  *  *  *  *  * 
//                 *  *  *  *  *  *  *  *  * 
//              *  *  *  *  *  *  *  *  * 
//           *  *  *  *  *  *  *  *  * 
//        *  *  *  *  *  *  *  *  * 
//     *  *  *  *  *  *  *  *  * 
//  *  *  *  *  *  *  *  *  * 

