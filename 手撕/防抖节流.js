function fd(fn) {
    let timer = null  // 定时器

    return function () {
        if (timer) clearTimeout(timer)  // 如果定时器存在，则清除定时器

        timer = setTimeout(() => {
            fn()  // 执行函数
        }, 300)
    }
}

function throttle(fn) {
    let flag = true

    return function () {
        if (!flag) return  // 如果flag为false，则返回

        fn()  // 执行函数

        flag = false
        setTimeout(() => {
            flag = true
        }, 300)
    }
}