//声明一个函数，并且设定在没有实参传递时的默认值
function getArrSum(arr=[]){
let sum=0
//依次将数组中的每个数存放进求和的sum变量中
for (let i=0;i<arr.length;i++){

    sum += arr[i]
}
console.log(sum)
}
getArrSum([1,8,0,89,9,5])