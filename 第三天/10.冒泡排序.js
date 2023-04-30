let arr=[4,5,2,9,7,0]
//需要的趟数
for (let i=0;i<arr.length -1;i++){
    //每一趟交换的次数
    for(let j=0;j<arr.length -i -1;j++){
        //开始交换，前提是第一个数大于第二个数发生
        if(arr[j]>arr[j+1]){
            let temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
        }

    }
}
console.log(arr);