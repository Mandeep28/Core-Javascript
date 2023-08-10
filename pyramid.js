/*
       1
      212
     32123
    4321234
   543212345
*/
const n = 8;
let result = "";
for(let i=1; i<=n; i++){
    let a = i;
    for(let j=1; j<= n*2; j++){
        // print spaces 
        if(j+i <= n){
            result += "  ";
        }
        else{
            // print first reverse pyramid 
            if(j <= n){
                result += `${a} `;
                a--;
            }
            else{
                // print second pyramid
                if(i>1 && a<=i){
                    if(a==0){ a=2;}
                        result += `${a} `;
                        a++;
                }
            }
        }
    }
    // for(let k = n; k>i; k--){
    //     result +="  ";
    // }
    // for(let m = i; m>1; m-- ){
    //     result += `${m} `;
    // }
    // for(let j=1; j<=i; j++){
    //     result += `${j} `;
    // }
    result += "\n";
}

console.log(result);
