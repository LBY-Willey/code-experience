// 点餐系统
function orderFood(foodName) {
    return new Promise((resolve, reject) => {
        console.log(`开始做${foodName}...`);
        
        setTimeout(() => {
            // 随机成功或失败
            if (Math.random() > 0.3) {
                const food = `${foodName}做好了！`;
                resolve(food); // 成功
            } else {
                reject(`${foodName}做失败了`); // 失败
            }
        }, 2000);
    });
}

// 点餐
orderFood('宫保鸡丁')
    .then(food => {
        console.log(`第一道菜: ${food}`);
        return orderFood('麻婆豆腐'); // 继续点第二道
    })
    .then(food => {
        console.log(`第二道菜: ${food}`);
        return orderFood('水煮鱼'); // 继续点第三道
    })
    .then(food => {
        console.log(`第三道菜: ${food}`);
    })
    .catch(error => {
        console.log(`出错了: ${error}`);
    });

console.log('我先去干别的，不等菜');