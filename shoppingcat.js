var qty = document.querySelector(".qty");
var shoppingCat = document.querySelector(".shoppingcat");

// 调取对象

shoppingCat.addEventListener("click",function(a){
  if(a.target.classList.contains("addbtn")){
    qty.innerText++;
  }
  if(a.target.classList.contains("reducebtn")&&qty.innerText>0)
    qty.innerText--;
  })

// 监听对象