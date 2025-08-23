function fd(fn){
    let timer = null
    return function(){
        if(timer) clearTimeout(timer)

        timer = setTimeout(()=>{
            fn()
        },300)
    }
}

function js(fn){
    let flag = true
    return function(){
        if(!flag) return
        
        fn()
         flag = false
         setTimeout(()=>{
            flag = true
         },300)
    }
}