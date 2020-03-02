var myDate =  Date.now()//获取当前实际的时间戳
var yourDate = new Date("May 25 ,2020")
console.log(myDate)
console.log(yourDate)
var date1 = new Date(2007, 0, 1);    
var date2 = new Date(2007, 1, 1);    
//调用了data的valueof方法  返回日期的毫秒值进行比较
console.log(date1 < date2);
 
