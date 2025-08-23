// VIP点餐服务
async function orderAllFood() {
    try {
        console.log('开始点餐...');
        
        const food1 = await orderFood('宫保鸡丁'); // 等第一道菜
        console.log(`第一道菜: ${food1}`);
        
        const food2 = await orderFood('麻婆豆腐'); // 等第二道菜
        console.log(`第二道菜: ${food2}`);
        
        const food3 = await orderFood('水煮鱼'); // 等第三道菜
        console.log(`第三道菜: ${food3}`);
        
        console.log('所有菜都点完了！');
    } catch (error) {
        console.log(`点餐失败: ${error}`);
    }
}

// 开始点餐
orderAllFood();
console.log('我先去干别的，不等菜');