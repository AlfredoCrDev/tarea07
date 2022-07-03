const charactersContainer = document.querySelector(".characters-container");


const axiosConect = async () => {
    try {
      const axiosData = await axios('https://rickandmortyapi.com/api/character');
      let data = axiosData.data;
      
      data.results.length = 20
    
      data.results.map(character => new Character(character));
     
     } catch (error) {
      console.log(error);
     }     
};
axiosConect();


class Character {
  constructor({ id, name, image, species }) {    
    this.__id = () => id;
    this.__name = () => name;
    this.image = image;
    this.__species = () => species;
    this.show();

  }

  get id(){
    return this.__id();
  }

  get name(){
    return this.__name();
  }

  get species(){
    return this.__species();
  }


    show() {
    const card = document.createElement("div");
    card.classList.add("conta");

    const cardImage = document.createElement("div");
    cardImage.classList.add("img-fluid");

    const characterPhoto = document.createElement("img");
    characterPhoto.src = this.image;

    const characterId = document.createElement("p");
    characterId.classList.add("h3");
    characterId.textContent = `ID: ${this.id}`;

    const cardName = document.createElement("p");
    cardName.classList.add("container__paragrah");
    cardName.textContent = 'Name: ' + this.name;

    const cardSpecies = document.createElement("h2");
    cardSpecies.classList.add("h2");
    cardSpecies.textContent = "Species: " + this.species;


    charactersContainer.appendChild(card);

    cardImage.appendChild(characterPhoto);
    card.appendChild(cardImage);
    card.appendChild(characterId);
    card.appendChild(cardName);   
    card.appendChild(cardSpecies);
    
    }
}