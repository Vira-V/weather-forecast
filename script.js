let inputval = document.querySelector("#cityinput");
let btn = document.querySelector("#add");
let city = document.querySelector("#cityoutput");
let description = document.querySelector("#description");
let feels = document.querySelector("#feelings");
let temp = document.querySelector("#temp");
let max = document.querySelector("#temp_max");
let min = document.querySelector("#temp_min");
let wind = document.querySelector("#wind");
let press = document.querySelector("#pressure");

let apik = "ec44ce25559821fab1c0f3ad2a937ea4";

function convertion(val){
    return (val - 273).toFixed(2)
}

btn.addEventListener('click', function(){

    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&APPID='+apik)
    
    .then(res => res.json())

    .then(data => {

        let nameval = data['name']
        let descript = data['weather'][0]['description']
        let feels_like = data['main']['feels_like']
        let temperature = data['main']['temp']
        let tem_max = data['main']['temp_max']
        let tem_min = data['main']['temp_min']
        let windspeed = data['wind']['speed']
        let pressure = data['main']['pressure']

    city.innerHTML=`<span>${nameval}</span> weather forecast`
    feels.innerHTML=`Feels like: <span>${convertion(feels_like)}C</span>`
    temp.innerHTML=`Temperature: <span>${convertion(temperature)}C</span>`
    max.innerHTML=`Max temperature: <span>${convertion(tem_max)}C</span>`
    min.innerHTML=`Min temperature: <span>${convertion(tem_min)}C</span>`
    description.innerHTML=`Sky Conditions: <span>${descript}</span>`
    wind.innerHTML=`Wind Speed: <span>${windspeed}m/s</span>`
    press.innerHTML=`Preassure: <span>${pressure}p</span>`
    })

    .catch(err => alert('Please, enter the locality name or correct name'));
})

