function $(selector){
    return document.querySelector(selector)
}
function $$(selector){
    return document.querySelectorAll(selector)
}

$('header .login span').onclick=function(){
    $('.flip-module').style.display = 'block' 
}

$$('.closeTab').forEach(function(b){
    b.onclick = function(){
        $('.flip-module').style.display = 'none'
        return false;
    }
})

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

