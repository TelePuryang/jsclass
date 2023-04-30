// 声明一个数组
let arr=[3,5,4,8,6]
// 声明一个保存最大元素的变量max，可以取数组中的第一个元素
let max= arr[0]
let min= arr[0]
// 遍历这个数组，用max和每个数组的元素进行比较
for(let i=1;i<arr.length;i++){
    //如果max比数组元素里面的值小，就把这个元素赋给max
    if(max<arr[i]){
        max=arr[i]
    }
}

for(let j=1;j<arr.length;j++){
    if(min>arr[j]){
        min=arr[j]
    }
}
console.log(`数组的最大值为${max}`);
console.log(`数组的最小值为${min}`);



// 也可以使用三元运算符进行写