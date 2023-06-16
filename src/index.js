function updateTime() {
  let zurichElement = document.querySelector("#zurich");
  let zurichDate = zurichElement.querySelector(".date");
  let zurichTimeElement = zurichElement.querySelector(".time");
  zurichDate.innerHTML = moment().format("MMMM Do YYYY");
  let zurichTime = moment().tz("Europe/Zurich");
  zurichTimeElement.innerHTML = zurichTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  let lisbonElement = document.querySelector("#lisbon");
  let lisbonDate = lisbonElement.querySelector(".date");
  let lisbonTimeElement = lisbonElement.querySelector(".time");
  lisbonDate.innerHTML = moment().format("MMMM Do YYYY");
  let lisbonTime = moment().tz("Europe/Lisbon");
  lisbonTimeElement.innerHTML = lisbonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
      </div>`;
}

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
