// 开始无限循环，使用while true
while (true) {
    let money = 0
    // 转换用户输入的值为数值
    let choose = +prompt(`
   
    请输入序号打开相应功能菜单：
    1.获取url对应的图片
    2.刷新交易货币余额
    3.向交易所提交所有未使用的货币
    4.退出
    `)
    // 使用模板字符串反引号，可以保持排版的操作

    if (choose === 4) {
        break
    }

    switch (choose) {
        case 1:
            //获取url对应的图片
            let url = prompt('将图片的url地址粘贴到这')

        case 2:
            //刷新数字货币的余额
            if (
                money === 0
            )
                alert('金钱余额为0，无法刷新')

        case 3:
            alert('等待开通此功能')
    }

}