function callSomeFunction(someFunction,someArgument){
    return someFunction(someArgument);
}
function add10(num){
    return num+10;
}
var result = callSomeFunction(add10,10);

function creatCompare(propertyName){
    return function(obj1,obj2){
        var value1 = obj1[propertyName]
        var value2 = obj2[propertyName]
        if(value1>value2){
            return 1 ;
        }else if(value1 < value2){
            return -1;
        }else{
            return 0;
        }
    }
}
var data = [{name:'G',age:18},{name:'A',age:19}];
data.sort(creatCompare(name));

