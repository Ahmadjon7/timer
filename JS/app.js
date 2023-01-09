'use strict'
    const now = new Date()
    $('.year').textContent = now.getFullYear()
    const yes = now.getMonth() + 1
    $('.month').textContent = yes < 10 ? '0' + yes: yes
    $('.date').textContent = now.getDate() < 10 ? '0' + now.getDate() : now.getDate() 

function timerShow(){
    const now = new Date()

    $('.hours').textContent = now.getHours();
    $('.minut').textContent = now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
    $('.sekunt').textContent = now.getSeconds() < 10 ? '0' + now.getSeconds() : now.getSeconds() 
}

timerShow()

setInterval(()=>{
    timerShow()
},1000)

