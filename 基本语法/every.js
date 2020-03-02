var numbers = [1,2,3,4,5,4,3,2,1];
//every() 数组的每一项都返回true。那么返回true
var erveryResult = numbers.every(function(item,index,array){
    return (item>0);
})
console.log(erveryResult)
//some方法只要有一项满足 就返回true
var someResult = numbers.someResult(function(item,index,array){
    return (item>4)
})
console.log(someResult)

//返回匹配结果为true的项
var filterResult = numbers.filter(function(item,index,array){
    return (item>2)
})
console.log(filterResult) //[3,4,5,4,3]

//map()：对数组中的每一项运行给定函数，返回每次函数调用的结果组成的数组
var mapResult = numbers.map(function(item,index,array){
    return item*2
})
console.log(mapResult)//[2,4,6,8,10,8,6,4,2]

var foreachResult = numbers.forEach(function(item,index,array){
    //这边执行对函数的操作，这个方法没有返回值
})

