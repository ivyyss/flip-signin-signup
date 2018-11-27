// 1.回调函数
function f1(callback){
    setTimeout(function(){
        console.log('开始执行f1')
        for(var i=0;i< 100000;i++){

        }
        console.log('f1执行完了')

        callback()
        // 将函数f2作为参数引入到异步函数中
    }, 0);

}
function f2(){
    console.log('执行f2');
}
function f3(){
    console.log('执行f3');
}
f1(f2)

// 2.函数节流
var timer
function hiFrequency(){
    if(timer){
        clearTimeout(timer)
    }
      timer = setTimeout(function(){
           console.log('do something')
      }, 300)
}