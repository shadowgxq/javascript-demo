function factorial (num){
    if(num<=1){
        return 1;
    }else{
        return num * factorial(num-1);
    }
}
function factorial(num){
    if(num<=1){
        return 1
    }else{
        return num * arguments.callee(num-1);
    }
}
