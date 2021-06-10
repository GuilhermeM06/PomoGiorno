// class Counter{
//     buttonStart;
//     buttonFinish;

//     constructor(){
//         this.buttonStart = document.getElementById('starter'),
//         this.buttonFinish = document.getElementById('finisher')
//     }
    


//     start(contador){
//         const btn = this.buttonStart;
//         if(btn.classList.contains('start')){
//             const clock = document.getElementById('clock')
//             clock.style.color = '#004b23'
//             btn.addEventListener('click',() => {
//                 btn.setAttribute('disabled', 'true')
//                 const timer = setInterval(() => {
//                     contador.startCountdown()
//                     contador.setTimer()
//                     if(contador.time <= 0){
//                         clearInterval(timer)
//                         btn.removeAttribute('disabled')
//                         this.convertClass(btn, 'start', 'interval', 'Iniciar Intervalo')
//                         App.init()
//                     }
//                 },1000)
//                 this.stop(timer)
//             })
//         }
//     }

//     stop(timer){
//         const btn = this.buttonFinish;
//         const btnStart = this.buttonStart
//         if(btn.classList.contains("cancel")){
//             btn.addEventListener('click',() => {
//                 btnStart.removeAttribute('disabled')
//                 clearInterval(timer)
//                 App.init()
//             })
//         }  
//     }

//     shortBreak(contador){
//         const btn = this.buttonStart;
//         if(btn.classList.contains('interval')){
//             const clock = document.getElementById('clock')
//             clock.style.color = '#0077b6'
//             contador.startInterval()  
//             contador.setTimer()
//             btn.addEventListener('click', () =>{
//                 btn.setAttribute('disabled', 'true')
//                 const timer = setInterval(() => {
//                     contador.startCountdown()
//                     contador.setTimer()
//                     if(contador.time <= 0){
//                         clearInterval(timer)
//                         btn.removeAttribute('disabled')
//                         this.convertClass(btn, 'interval', 'start', 'Novo Ciclo')
//                         App.init()
//                     }
//                 },1000)
//             })
//         }

//     }

//     convertClass(btn, actualClass, newClass, name){
//         btn.classList.remove(actualClass)
//         btn.classList.add(newClass)
//         btn.innerHTML = name
//     }

// }