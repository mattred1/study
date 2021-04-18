// Variables
const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'


// Create new image inside of #container

for (let i = 1; i < 152; i++) {
    const newImg = document.createElement('img');
    newImg.src= `${baseURL}${i}.svg`;
    container.appendChild(newImg);

}