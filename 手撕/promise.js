function Promise(executor){
    let state = 'pending'  // 状态初始化为等待
    let value = undefined  // 值初始化
    let callbacks = [] // 存储回调函数的数组（处理异步）
    
    function resolve(val) {  // resolve函数：将Promise从pending改为成功状态
        if(state === 'pending'){
            state = 'fulfilled'
            value = val
            // 执行所有等待的成功回调函数
            callbacks.forEach(cb=>cb.resolve(val))
        }
    }
    function reject(val){  // reject函数：将Promise从pending改为失败状态  
        if(state === 'pending'){
            state = 'rejected'
            value=val
            // 执行所有等待的失败回调函数
            callbacks.forEach(cb=>cb.reject(val))
        }
    }
    this.then = function(onFulfilled,onRejected){
        if(state === 'fulfilled'){
            onFulfilled(value)
        }
        else if(state === 'rejected'){
            onRejected(value)
        }
        else {
            callbacks.push({
                resolve: onFulfilled,
                reject: onRejected
            })
        }
    }
    executor(resolve,reject)
}