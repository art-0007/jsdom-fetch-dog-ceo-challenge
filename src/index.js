console.log('%c HI', 'color: firebrick')

const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
const breedUrl = "https://dog.ceo/api/breeds/list/all"
let breedsArray;

function loadElements() {
    const dropDown = document.querySelector("#breed-dropdown")
    dropDown.addEventListener('change', handleChange)
}

document.addEventListener("DOMContentLoaded", function() {
    loadImages();
    loadBreeds();
    loadElements();
})

async function loadImages() {
    const resp = await fetch(imgUrl);
    const results = await resp.json();
    results.message.forEach(image => addImage(image));
}

async function loadBreeds() {
    const resp = await fetch(breedUrl);
      const results = await resp.json();
      breedsArray = Object.keys(results.message);
    //   addBreeds(breedsArray);
}

function addBreeds(breeds) {
    const ul = document.getElementById("dog-breeds");
    breeds.forEach(breed => {
        const li = document.createElement("li");
        li.innerText = breed;
        ul.appendChild(li);
        li.addEventListener("click", function(event) {
            event.target.style.color = "#0DD41F";
        })
    })
}

function addImage(dog) {
    const div = document.getElementById("dog-image-container");
    const img = document.createElement("img");
        img.src = dog;
        div.appendChild(img);
};

function handleChange(event) {
    const letter = event.target.value
    const ulContener = document.querySelector("#dog-breeds")
    const filteredBreeds = breedsArray.filter(breed => breed.startsWith(letter))
    ulContener.innerHTML = ''
    addBreeds(filteredBreeds)

}

