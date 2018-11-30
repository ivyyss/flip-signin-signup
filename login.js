function $(selector){
    return document.querySelector(selector)
}
function $$(selector){
    return document.querySelectorAll(selector)
}

$('header .login span').onclick=function(){
    $('.flip-module').style.display = 'block'
}


// console.log($$('.flip-module .tabs .loginTab'))
// $$('.flip-module .tabs .loginTab').forEach(function(node){
// node.onclick = function(){
//     $('.flip-module').classList.remove('register')
//     $('.flip-module').classList.add('login')    
// }
// })
// $$('.flip-module .tabs .registerTab').forEach(function(node){
//     node.onclick = function(){
//         $('.flip-module').classList.remove('login')
//         $('.flip-module').classList.add('register')    
// }
// })





$$('.loginTab').forEach(function(a){
    a.onclick = function(){
$('.flip-module').classList.add('login');
$('.flip-module').classList.remove('register');
    }
})

$$('.registerTab').forEach(function(a){
    a.onclick = function(){
$('.flip-module').classList.add('register');
$('.flip-module').classList.remove('login');
    }
})