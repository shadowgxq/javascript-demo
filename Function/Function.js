function sum(num1,num2){
    return num1+num2;
}
var another = sum;
sum=null;
console.log(another(10,10));
console.log(sum(10,10));