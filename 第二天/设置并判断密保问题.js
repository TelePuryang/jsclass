
// 让用户设置自己的密保问题
let q1= prompt('你的小学班主任老师名字为：')
let q2= prompt('你最喜欢的水果是：')
let q3= prompt('你的故乡是：')


let q1a= prompt('你的小学班主任老师名字为：')



if (q1a === q1 ){
    let q2a= prompt('你最喜欢的水果是：')
    if(q2a===q2){
        let q3a= prompt('你的故乡是：')
        if (q3a === q3){
            alert('密保正确，即将进入重设密码界面')
        }
    }
    
}
else{
    alert('密保回答错误，无法重设密码')
}





// 在重置密码时判断用户回答的密保问题是否正确

// 密保问题回答正确进入重设密码界面