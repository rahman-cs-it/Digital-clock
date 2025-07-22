let time = document.querySelector('.time')

setInterval(()=>{
    let digitalTime = new Date().toLocaleTimeString()
    time.innerHTML = digitalTime
},1000)
