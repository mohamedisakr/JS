// Simulate Null Coalescing Operator, for checking if the value has null or undefined
function checkForNullOrUndefined(val){
    if(typeof val!=='undefined'|| val!==null){
        return val;
  }
}
