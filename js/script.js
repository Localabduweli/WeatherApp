const weatherForm = document.querySelector(".weatherForm")
const cityInput = document.querySelector(".cityInput")
const card = document.querySelector(".card")
const apiKey = "3b19006b701fe6df92c5a2b965a139db";


weatherForm.addEventListener("submit", async event => {
    event.preventDefault();

    const city = cityInput.value;

    if(city){
        try{
        const weatherData = await getWeatherData(city);
        displayWeatherInfo(data);
        }
        catch(error){
            console.error(error);
            displayError(error);
        }
    }else{
        throw New error("please enter a city");
    }
});

async function getWeatherData(city){

    
    



    

}

function displayWeatherInfo(data){

}

function getWeatherEmoji(weatherId){

}

function displayError(message){
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add("errorDisplay")

    card.textContent = "";
}