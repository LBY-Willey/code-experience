// 开始点菜
function orderFood(foodName, callback) {
    console.log(`开始做${foodName}...`);
    
    // 厨师做菜需要时间（异步）
    setTimeout(() => {
        const food = `${foodName}做好了！`;
        callback(food); // 菜做好了，通知点菜的人
    }, 3000);
}

// 点餐
orderFood('宫保鸡丁', function(food) {
    console.log(`收到: ${food}`);
    // 可以继续点下一道菜
    orderFood('麻婆豆腐', function(food2) {
        console.log(`收到: ${food2}`);
    });
});

console.log('我先去干别的，不等菜');