function api(event) {
  event.preventDefault();
  let city = document.querySelector(".lookUp").value;
  let apiKey = "88724523008dc9e1be18f6eb6a959b67";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showDetails);
}
let searchButton = document.querySelector(".button");
searchButton.addEventListener("click", api);
function showDetails(response) {
  let cityName = document.querySelector(".location");
  cityName.innerHTML = `${response.data.name}📍`;
  let temp = document.querySelector(".currentTemp");
  temp.innerHTML = Math.round(response.data.main.temp);
}
navigator.geolocation.getCurrentPosition(getPosition);
let locationButton = document.querySelector(".geoLocation");
locationButton.addEventListener("click", getPosition);
function getPosition(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiLink = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric`;
  let key = "88724523008dc9e1be18f6eb6a959b67";
  axios.get(`${apiLink}&appid=${key}`).then(getByLocation);
}
function getByLocation(response) {
  let locationTemp = document.querySelector(".currentTemp");
  locationTemp.innerHTML = Math.round(response.data.main.temp);
  let location = document.querySelector(".location");
  location.innerHTML = `${response.data.name}📍`;
}
