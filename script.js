const BASE_URL = "https://dog.ceo/api/breeds/image/random";
const dog = document.getElementById("dog");
let btn = document.querySelector("#btn");
async function getData() {
  try {
    const res = await fetch(BASE_URL);
    const data = await res.json();
    console.log(data);
    addDog(data);
  } catch (e) {
    console.log(e);
  }
}
function addDog(data) {
  dog.src = data.message;
}
btn.addEventListener("click", () => getData());
