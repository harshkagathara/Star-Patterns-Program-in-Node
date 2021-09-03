let n = 9;
let m = n;
let string = "";

for (let i = 1; i <= n; i++) {

  for (let j = 1; j <= i-1; j++) {

    string += "   ";

  }

  for (let k = 1; k <= m; k++) {
   
    string += " * ";

  }
  string += "\n";
  m--;
}
console.log(string);

//output :

// *  *  *  *  *  *  *  *  * 
//    *  *  *  *  *  *  *  * 
//       *  *  *  *  *  *  * 
//          *  *  *  *  *  * 
//             *  *  *  *  * 
//                *  *  *  * 
//                   *  *  * 
//                      *  * 
//                         * 




