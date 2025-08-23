// js内置方法
function thousands(num) {
    return Number(num).toLocaleString();  // 输出字符串
}

// 正则方法
function thousands2(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');  // 输出字符串
    // 正则表达式解释：
    // \B 可以插空的地方（指非边界）
    // (?=) ：向前找
    // (\d{3}) ：找3个数字
    // (?!\d) ：前面 不能 是数字
}

console.log(thousands('1234567890.123'));
console.log(thousands2('1234567890.123abcde'));
