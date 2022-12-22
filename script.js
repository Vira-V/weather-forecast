let inputval = document.querySelector("#cityinput");
let btn = document.querySelector("#add");
let city = document.querySelector("#cityoutput");
let description = document.querySelector("#description");
let temp = document.querySelector("#temp");
let wind = document.querySelector("#wind");

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
        let temperature = data['main']['temp']
        let windspeed = data['wind']['speed']

    city.innerHTML=`<span>${nameval}</span> weather forecast`
    temp.innerHTML=`Temperature: <span>${convertion(temperature)}C</span>`
    description.innerHTML=`Sky Conditions: <span>${descript}</span>`
    wind.innerHTML=`Wind Speed: <span>${windspeed}C</span>`
    })

    .catch(err => alert('Please, enter the locality name or correct name'));
})

