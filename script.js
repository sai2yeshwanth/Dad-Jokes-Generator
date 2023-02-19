const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");
const apikey = "yt8OGjRRgkj/IMGgS803Dw==l8vx9qErdIeMCDoh";

const options = {
  method: "GET",
  headers: {
    "X-Api-key": apikey,
  },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke() {
  jokeEl.innerText = "updating...";
  btnEl.disabled = true;
  btnEl.innerText = "loading...";
  const response = await fetch(apiURL, options);
  const data = await response.json();
  btnEl.disabled = false;
  btnEl.innerText = "Tell me a joke";
  jokeEl.innerText = data[0].joke;
  console.log(data[0].joke);
}
btnEl.addEventListener("click", getJoke);
