
// 求1-100之间所有的偶数和
let sum = 0
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        // 把i放到sum里面去让他求和
        sum += i

    }
}

document.write(`1-100的偶数和为 ${sum}`)