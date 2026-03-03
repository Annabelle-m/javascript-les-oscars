const poneys = [
    {name: "Pinky Pie", strength: "50", speed: "65", charisma: "80", description: "Tout au long de la journée Pinkie Pie fait rire et sourire ses amis ! Elle saute sur n'importe quel prétexte pour faire la fête et rendre ses amis heureux !" }, 
    {name: "Rainbow Dash", strength: "80", speed: "75", charisma: "90", description: "Ce qui passionne Rainbow Dash plus que tout au monde, c'est voler et voler vite ! Sportive et pleine de ressources, elle vit pour l'aventure !" }, 
    {name: "Twilight Sparkle", strength: "90", speed: "45", charisma: "70", description: "Twilight Sparkle est devenue une princesse ! Les poneys de Ponyville la respectent beaucoup pour son intelligence. C'est aussi une meneuse qui sait utiliser les capacités et les talents de ses amis pour accomplir leurs missions." }, 
    {name: "Rarity", strength: "30", speed: "50", charisma: "85", description: "La belle et artiste Rarity est une artiste talentueuse ! Elle trouve toujours le temps d'aider ses amies en leur donnant des conseils concernant la mode !" }, 
    {name: "Fluttershy", strength: "67", speed: "64", charisma: "30", description: "Fluttershy adore toutes les créatures d'Equestria qu'elles soient grandes ou petites. Même si elle est timide, elle a toujours une place dans sa petite maison à l'écart pour tous ses amis animaux !" }
];


// ===== COULEURS SUR TITRE H1 =====
const couleurs = ["#FC1A10", "#E79C13", "#EEFC37", "#47C529", "#3B6AE8", "#B94FF3", "#E57CF0"];
const titre = document.querySelector ('h1');
const lettre = titre.textContent;
    titre.textContent = "";

for (let i = 0; i < lettre.length; i++) {
    const span = document.createElement('span');
        span.textContent = lettre[i];
        span.style.color = couleurs[i % couleurs.length];

    titre.append(span);
}


// ===== ANIMATION NAVIGATEUR CAROUSEL ===== https://codemalin.fr/articles/creer-un-carrousel-en-javascript.html
const slides = document.querySelectorAll('.poneys'); 
const slidesContainer = document.querySelector('.slides'); 
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

// Fonction pour mettre à jour la position
function updateSlidePosition() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    slidesContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    updateButtons(); // on vérifie l'état des boutons après chaque déplacement
}

// Fonction pour changer les images 
function updateButtons() {
    const prevImg = prevBtn.querySelector('img');
    const nextImg = nextBtn.querySelector('img');

    if (currentIndex === 0) {
        prevImg.src = "img/arrowDis.png"; // désactivé
    } else {
        prevImg.src = "img/arrow.png"; // normal
    }

    if (currentIndex === slides.length - 1) {
        nextImg.src = "img/leftDis.png"; // désactivé
    } else {
        nextImg.src = "img/right.png"; // normal
    }
}

// Bouton suivant
nextBtn.addEventListener('click', () => {
    if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateSlidePosition();
    }
});

// Bouton précédent
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlidePosition();
    }
});

// Initialisation
updateSlidePosition();



// ===== TEXTE PONEYS =====

const poneyItems = document.querySelectorAll('.poneys');

poneyItems.forEach((item, index) => {
  const texteDiv = item.querySelector('.poneysTexte');
  const titre3 = texteDiv.querySelector('h3');
  const paragraphe = texteDiv.querySelector('p');


  const vitesseFill = texteDiv.querySelector('.competence .vitesse + .bar .fill');
  const forceFill   = texteDiv.querySelector('.competence .force + .bar .fill');
  const charismeFill= texteDiv.querySelector('.competence .charisme + .bar .fill');

  const poney = poneys[index];

  if (poney) {
    item.addEventListener('mouseenter', () => {
      titre3.textContent = poney.name;
      paragraphe.textContent = poney.description;

      // ajustement de la largeur seulement
      vitesseFill.style.width = poney.speed + '%';
      forceFill.style.width   = poney.strength + '%';
      charismeFill.style.width= poney.charisma + '%';

      texteDiv.style.display = "block";
    });

    item.addEventListener('mouseleave', () => {
      texteDiv.style.display = "none";
    });
  }
});






