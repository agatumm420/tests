let new_letters=[];
const ceasar=(string, shift)=>{
    let letters=[...string];
    
    return string.replace(/[a-z]/g, (char) =>
    String.fromCharCode(((char.charCodeAt(0) - 97 + shift) % 26) + 97)
  );
//}
    // const finalFacory=()=>{

    // }
    
    // let ready=letters.reduce((arr,letter, index)=>{
    //    let converted= letter.charCodeAt(index)
    //    let siphered=converted+1;
    //     final=String.fromCharCode(siphered)
      
    //    return arr= new_letters.push(final);
       
    // }, []);
    // let ready= string.replace(/[a-z]/g, char=>{
    //     let code=(char.charCodeAt(0)+shift)%26
    //     String.fromCharCode(( )
    // })
    // return ready;
    //let new_word=ready.join("");
  //  return ready[0];
};
module.exports=ceasar;