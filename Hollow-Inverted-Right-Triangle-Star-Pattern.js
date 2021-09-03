let n = 9;

let string = "";

for (let i = n; i >= 1; i--) {

  for (let j = 1; j <= i; j++) {
    if(j==1  || j == i || i == n){
        string += " * ";
    }else{
        string += "   ";
    }

  }
  string += "\n";
}
console.log(string);

//output :

// *  *  *  *  *  *  *  *  * 
// *                    * 
// *                 * 
// *              * 
// *           * 
// *        * 
// *     * 
// *  * 
// * 




