let arr=[2,0,6,1,77,9,54,3,78,7]
//设定一个新的数组用于存放满足条件的数据
let newArr=[]

//去遍历旧数组
for (let i=0;i<arr.length;i++){
    if(arr[i]>=10){
        //将满足条件的数据追加给新的数组
        newArr.push(arr[i])
    }
}
console.log(newArr)
