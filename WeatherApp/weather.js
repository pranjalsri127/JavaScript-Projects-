const weather=document.getElementById('weather')
const text=document.getElementById('text')
const search=document.getElementById('search')
const heading=document.getElementById('heading');
const icon=document.querySelector('.icon')
const temp=document.querySelector('.temp')
const desc=document.querySelector('.desc')
const apiKey="cd7bde3d11a35066c9c90010ca1e0f9d"



search.addEventListener("click",function(event){
   event.preventDefault()
    if(!text.value){
        heading.style.color="red"
        heading.innerText="Please enter a City Name"
    }else{
        showWeather(text.value)
    }
})

function showWeather(text){
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=cd7bde3d11a35066c9c90010ca1e0f9d`;
    fetch(url)
    .then((res)=>res.json())
    .then((data)=>{
        const temperature=`${Math.round(data.main.temp-273.15)}°C`
        temp.innerText=temperature
        const about=data.weather[0].description
        desc.innerText=about;

    console.log(data)
    })
    .catch((error)=>console.error('Error fetching data'))
}


