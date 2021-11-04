const Calculator=(a,operator,b)=>{
    const A= Number(a);
    const B=Number(b);
 if(operator=="+"){

     return A+B;
 };
 if(operator=="-"){
     return A-B;
 };
 if(operator=="*"){
   return A*B;
 };
 if(operator="/"){
     return A/B;
 };
};
module.exports=Calculator;