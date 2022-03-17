

let second = document.querySelector('.s'),
    minutes = document.querySelector('.m'),
    hours = document.querySelector('.h'),
    housrNumber = document.querySelector('.hours'),
    minutesNumber = document.querySelector('.minutes');

function clock() { 
    let time = new Date(),
    sec = time.getSeconds() * 6,
    min = time.getMinutes() * 6,
    hour = time.getHours() * 30;

    second.style = `transform: rotate(${sec}deg)`
    minutes.style = `transform: rotate(${min}deg)`
    hours.style = `transform: rotate(${hour}deg)`

    housrNumber.innerHTML = time.getHours() < 10 ? '0'  + time.getHours( ) : time.getHours()
    minutesNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
    
    setTimeout(() => clock(), 1000)


}

// рекурсия это функция которая вызывает саму себя
clock()

 let links = document.querySelectorAll('.tabsItem'),
    tabsContent = document.querySelectorAll('.tabsContentItem')

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e){
        e.preventDefault()
        for (let j =0 ; j < links.length; j++){
            links[j].classList.remove('active')
            tabsContent[j].classList.remove('active')
        }

        this.classList.add('active')
        tabsContent[i].classList.add('active')
    })
}

let stopWatchBtn = document.querySelector('.stopwatch__btn'),
    indicator =document.querySelector('.tabsLink__span'),
    stopWatchHours = document.querySelector('.stopwatch__hours'),
    stopWatchMinutes = document.querySelector('.stopwath__minutes'),
    stopWatchSeconds = document.querySelector('.stopwatch__seconds');

stopWatchBtn.addEventListener('click' , function() {
    if (stopWatchBtn.innerHTML === 'start') {
        stopWatchBtn.innerHTML = 'stop'
        indicator.classList.add('active')
    } else if (stopWatchBtn.innerHTML === 'stop'){
        stopWatchBtn.innerHTML = 'clear' 
        indicator.classList.remove('active')
        indicator.classList.add('active_clear')
    }else {
        stopWatchBtn.innerHTML = 'start'
        indicator.classList.remove('active_clear')
    }
})


let 
    stopwatch__hours = document.querySelector('.stopwatch__hours'),
    stopwatch__minutes = document.querySelector('.stopwatch__minutes'),
    stopwatch__seconds = document.querySelector('.stopwatch__seconds');




