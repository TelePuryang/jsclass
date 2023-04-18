// 1、让用户输入

let price = 499
let num = +prompt('请输入数量')
let address = prompt('请输入收货地址')
// 2、计算总额
let total = price * num
let phoneNumber=+prompt('请输入收货号码')

// 3、页面渲染打印
document.write(`
<table>
<tr>
    <th>你买的是</th>
    <th>价格</th>
    <th>商品数量</th>
    <th>总价</th>
    <th>收货地址</th>
    <th>收货号码</th>

</tr>
<tr>
    <td>《神之国度豪华版》</td>
    <td>${price}</td>
    <td>${num}</td>
    <td>${total}</td>
    <td>${address}</td>
    <td>${phoneNumber}</td>
</tr>
</table>
`)