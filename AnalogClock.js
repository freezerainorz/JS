const hourEl = document.querySelector('.hour');
const minEl = document.querySelector('.min');
const secEl = document.querySelector('.sec');



setInterval(()=>{
    const date = new Date; 
    const secDeg = date.getSeconds()/60 * 360 - 90;
    const minDeg = date.getMinutes()/60 * 360 - 90;
    const hourDeg = date.getHours()/12 *360 - 90;

    secEl.style.transform = `rotate(${secDeg}deg)`;
    minEl.style.transform = `rotate(${minDeg}deg)`;
    hourEl.style.transform = `rotate(${hourDeg}deg)`;
},1000)

