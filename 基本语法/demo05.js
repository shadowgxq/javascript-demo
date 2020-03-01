function add(num){
    num +=num;
    return num
}
var count = 20;
var result = add(count)


function setName(obj){
    obj.name = 'Nicholas'
}
var person = new Object();
setName(person);
console.log(person.name);