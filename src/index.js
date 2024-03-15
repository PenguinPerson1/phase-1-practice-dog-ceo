console.log('%c HI', 'color: firebrick')

const dogBreeds = document.querySelector("#dog-breeds");
const breedDropdown = document.querySelector("#breed-dropdown")

const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedUrl = "https://dog.ceo/api/breeds/list/all";

fetch(imgUrl)
.then(res => res.json())
.then(images => {
    images.message.forEach(element => {
        const img = document.createElement("img");
        img.src = element;
        img.width = 500
        document.querySelector("#dog-image-container").append(img);
    });
})
.catch(error => console.log(error))

fetch(breedUrl)
.then(res => res.json())
.then(breeds => {
    for (const dog in breeds.message) {
        const li = document.createElement("li");
        li.textContent = dog;
        li.className = "dog-entries"
        dogBreeds.append(li);
    }
})
.catch(error => console.log(error))

dogBreeds.addEventListener("click", event => {
    if(event.target!==dogBreeds){
        event.target.style.color = "#ff0000";
    }
});

breedDropdown.addEventListener("change", () => {
    console.log("changed");
    if (breedDropdown.value==="all") {
        console.log("resetting");
        dogBreeds.querySelectorAll("[hidden]").forEach(element => element.hidden = false);
    } else {
        dogBreeds.childNodes.forEach(element => {
            element.hidden=(element.textContent[0]!==breedDropdown.value);
        });
    };
});