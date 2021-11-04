const reverseString=(string)=>{
 let letters=[...string];
 let new_letters=[];
 letters.reduce((current,letter)=>{
    new_letters.unshift(letter);
 }, 0);

 let new_word=new_letters.join("");
 return new_word;
};
module.exports=reverseString;