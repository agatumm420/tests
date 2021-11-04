const analyze=(array)=>{
    const Factory=(average, min, max , length)=>{
        return { average, min, max, length}
    }
   let summed=array.reduce((sum,num)=>{ 
       let number=Number(num);
       return sum+number},0)
   let avg=summed/array.length;
   let mini=Math.min(...array);
   let maxi=Math.max(...array);
   const object=Factory(avg, mini, maxi, array.length);
   return object;

};
module.exports=analyze;