let n = 9;
let m = 1 ;

let string = "";

for (let i = n; i >= 1; i--) {

  for (let j = 1; j <= i-1; j++) {

    string += "   ";

  }

  for (let k = 1; k <= m; k++) {
    if(k== 1 || m == n || k == m){
      string += " * ";
    }else{
      string += "   ";
    }

  }
  string += "\n";
  m++;
}
console.log(string);

//output :

//                          * 
//                       *  * 
//                    *     * 
//                 *        * 
//              *           * 
//           *              * 
//        *                 * 
//     *                    * 
//  *  *  *  *  *  *  *  *  * 



