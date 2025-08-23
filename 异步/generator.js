// Generator函数 - 可以暂停和继续
function* gameGenerator() {
    console.log('游戏开始');
    yield '第一关'; // 暂停，返回"第一关"
    
    console.log('继续游戏');
    yield '第二关'; // 暂停，返回"第二关"
    
    console.log('继续游戏');
    yield '第三关'; // 暂停，返回"第三关"
    
    console.log('游戏结束');
    return '通关！';
}

// 使用Generator
const game = gameGenerator();

console.log(game.next()); // {value: '第一关', done: false}
console.log(game.next()); // {value: '第二关', done: false}
console.log(game.next()); // {value: '第三关', done: false}
console.log(game.next()); // {value: '通关！', done: true}