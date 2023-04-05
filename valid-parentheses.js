function validParentheses(parenStr) {
    let sum=0;
    let bool=true;
    Array.from(parenStr).forEach((val)=>{
        val=='('?sum++:sum--;
        if(sum<0){
            bool = false;
        }
    });
    if(sum!=0) return false;
    return bool;
}