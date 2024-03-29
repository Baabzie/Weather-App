import {createWeatherData} from "../main.js";

const searchInput = document.getElementById("searchInput");
const placesList = document.getElementById("placesList");
let searchResults = [];

searchInput.addEventListener("input", () => {
    const places = searchInput.value;
    getPlaces(places);
})

async function getPlaces(places) {
    try {
        const url = `https://geocoding-api.open-meteo.com/v1/search?name=${places}`
        const res = await fetch(url);
        const data = await res.json();
        createPlacesList(data);       
    }
    catch {

    }
}

const createPlacesList = (arr) => {
    placesList.innerHTML = "";
    searchResults= [];
    searchResults = arr.results;
    arr.results.forEach((location) => {
        let name = "";
        let state = "";
        let muni = "";
        let country = "";
        if ("name" in location) {
            name = `${location.name}, `;
        }
        if ("admin1" in location) {
            state = `${location.admin1}, `;
            if (state === name) {
                state = "";
            }
        }
        if ("admin2" in location) {
            muni = `${location.admin2}, `;
        }
        if ("country" in location) {
            country = `${location.country}`;
            
        }
        let place = document.createElement("li");
        let placeBtn = document.createElement("button");
        placeBtn.classList.add("place-btn");
        placeBtn.value = (location.id);
        placeBtn.innerText = name + state + muni + country;
        let flag = document.createElement("img");
        flag.classList.add("flag");
        flag.src = `https://www.countryflagicons.com/FLAT/64/${location.country_code}.png`
        placeBtn.prepend(flag);
        place.append(placeBtn);
        placesList.append(place);
        placeBtn.addEventListener("click", () => {
            getLocationData(placeBtn.value)
            placesList.innerHTML = "";
            searchInput.value = "";
        })
    })

}


//Function to get the name, latitude and longitude from the search and then running the function to present the weather at that location.
const getLocationData = (id) => {
    let idAsNumber = (parseInt(id))
    searchResults.forEach((index) => {
        if (index.id === idAsNumber) {
            createWeatherData(index.name, index.latitude, index.longitude)
        }
    })
}