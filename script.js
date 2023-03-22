const saySomething = document.querySelector(".say-something");
const newMessage = document.querySelector(".new-message");
const postButton = document.querySelector("#post");
const tweets = document.querySelector("main");
const form = document.querySelector(".new-tweet-form");
const textarea = document.querySelector(".tweet-message");
const hamburgerButton = document.querySelector(".nav-toggler");
const menu = document.querySelector(".menu");
const dark = document.querySelector(".dark-button");
const themeColor = document.querySelector("#color");
const countLikes = document.getElementsByClassName("compteur-likes");
let count = [136];
let indiceCompteur = 0;

// Tableau des profils des membres avec un Tweet par défaut
const persons = [
  {
    name: "Anthony",
    picture:
      "https://storage.googleapis.com/quest_editor_uploads/r6XufUn3Fyc24ROrehmyRkl4wmTNaaYR.png",
    message: "Ok ! Let's gooooo !",
  },
  {
    name: "Alexis",
    picture: "https://github.com/AlexisChesneau.png?size=300",
    message: "Le gras c'est la vie !",
  },
  {
    name: "Badis",
    picture: "https://github.com/badis69.png?size=300",
    message: "On va manger des chips ! T'entends ? Des chips !",
  },
  {
    name: "Chloé",
    picture: "https://www.gravatar.com/avatar/54738?d=identicon&s=300",
    message: "Hier j'ai mangé une pomme !",
  },
  {
    name: "Denis",
    picture: "https://github.com/ddZ6ii.png?size=300",
    message: "Le JS c'est quand même mieux que le PHP, non ?",
  },
  {
    name: "Enzo",
    picture:
      "https://storage.googleapis.com/quest_editor_uploads/YSKI7qaSLm9lP0dod16OelpMs9WH5iRo.jpeg",
    message: "J'ai une nouvelle casquette 😍",
  },
  {
    name: "Hafsa",
    picture: "https://github.com/hxfsa.png?size=300",
    message: "Je code plus vite que mon ombre 😼",
  },
  {
    name: "Jérémy",
    picture:
      "https://storage.googleapis.com/quest_editor_uploads/mfacLOEVn1wqxij2Hj1rLSM5zXyrKCCB.jpg",
    message: "Un soucis de design ? Call me !",
  },
  {
    name: "Kylian",
    picture: "https://github.com/Kyxk.png?size=300",
    message: "Excellent le dernier chapitre de One Piece !",
  },
  {
    name: "Oyhana",
    picture:
      "https://storage.googleapis.com/quest_editor_uploads/M0dFOY3q5T7UipQdtdmpqP6aXU1uVImH.png",
    message: "Aujourd'hui j'ai mis mes lentilles hihi !",
  },
  {
    name: "Pierre",
    picture:
      "https://storage.googleapis.com/quest_editor_uploads/R8XjJwZjvLEEu1helx3NqJrwiOBJQt5P.jpg",
    message: "Vous avez vu le dernier match de la NFL ??? Une dinguerie !",
  },
  {
    name: "Roxane",
    picture: "https://www.gravatar.com/avatar/51089?d=identicon&s=300",
    message: "Mon enfant est encore malade 😭",
  },
  {
    name: "Samuel",
    picture:
      "https://storage.googleapis.com/quest_editor_uploads/zUMCYxY9T7ImEB8t2kKgfjh3pDmJ9z29.jpg",
    message: "On prend l'apéro quand ?!",
  },
  {
    name: "Stéphane",
    picture:
      "	https://storage.googleapis.com/quest_editor_uploads/TinUgH8n5ye256CDqy4nFSiZDZ4dpw63.jpg",
    message:
      "Pfiou j'ai le cerveau en compote à cause des spreads, j'ai rien compris...",
  },
  {
    name: "Sébastien",
    picture:
      "https://storage.googleapis.com/quest_editor_uploads/eyHJwkIpfxXI7InahjmSfmMFfT9mlcGn.png",
    message: "Euh ? Non rien...",
  },
  {
    name: "Thibaut",
    picture: "https://github.com/neolink78.png?size=300",
    message: "Je vais m'entrainer à la salle à 18h, qui veut venir ?",
  },
  {
    name: "Victor",
    picture: "https://github.com/neolink78.png?size=300",
    message: "C'est moi Victor le Castor ! 🦫",
  },
  {
    name: "Vincent",
    picture: "https://avatars.githubusercontent.com/u/123705048?v=4",
    message: "En vrai, la Wild Code School ça claque sa maman !",
  },
  {
    name: "Youcef",
    picture: "https://www.gravatar.com/avatar/15780?d=retro&s=300",
    message: "C'est génial le projet RavenFeed ! ❤️",
  },
];

// Affichage du formulaire de nouveau Tweet
saySomething.addEventListener("click", function (event) {
  saySomething.style.display = "none";
  newMessage.style.display = "flex";
});

// Génération de 3 Tweet Aléatoire pour les tests
for (let i = 0; i < 6; i++) {
  let indice = Math.floor(Math.random() * persons.length);
  createTweet(
    persons[indice].name,
    persons[indice].picture,
    persons[indice].message
    // textarea.value
  );
}

// Création d'un nouveau Tweet à l'envoie du formulaire
form.onsubmit = function (event) {
  event.preventDefault();
  saySomething.style.display = "flex";
  newMessage.style.display = "none";

  // Test de tweet aléatoire sur le bouton "Post"
  let indice = Math.floor(Math.random() * persons.length);

  createTweet(
    persons[indice].name,
    persons[indice].picture,
    // persons[indice].message
    textarea.value
  );

  textarea.value = "";
};

function createTweet(nameF, pictureF, newTweetContent) {
  // Initialisation des variables d'un Tweet
  let dateOfTheDay = new Date();
  let numberLikes = 0;
  let numberComments = 0;
  let numberShares = 0;

  // Récupération de la date et de l'heure du nouveau Tweet
  dateOfTheDay =
    "📅 " +
    dateOfTheDay.getUTCDate() +
    ":" +
    (dateOfTheDay.getUTCMonth() + 1) +
    ":" +
    dateOfTheDay.getUTCFullYear().toString().substr(-2) +
    "<br>" +
    "⌚ " +
    dateOfTheDay.getHours() +
    ":" +
    dateOfTheDay.getMinutes() +
    ":" +
    dateOfTheDay.getSeconds();

  // Génération de la div principale d'un tweet
  const tweet = document.createElement("div");
  tweet.classList.add("tweet");
  if (!dark.classList.contains("dark")) {
    tweet.classList.add("dark-tweet");
  }
  tweets.appendChild(tweet);

  // Génération du Header d'un tweet
  const tweetHeader = document.createElement("div");
  tweetHeader.classList.add("tweet-header");
  tweet.appendChild(tweetHeader);

  const profile = document.createElement("div");
  profile.classList.add("profile");
  tweetHeader.appendChild(profile);

  const profilePic = document.createElement("img");
  profilePic.src = pictureF;
  profilePic.classList.add("profile-pic");
  profile.appendChild(profilePic);

  const profileName = document.createElement("p");
  profileName.classList.add("profile-name");
  profile.appendChild(profileName);
  profileName.innerHTML = nameF;

  const date = document.createElement("div");
  date.classList.add("date");
  tweetHeader.appendChild(date);
  date.innerHTML = dateOfTheDay;

  // Génération du corps d'un Tweet
  const tweetBody = document.createElement("div");
  tweetBody.classList.add("tweet-body");
  tweet.appendChild(tweetBody);

  // Contenu du Tweet
  const message = document.createElement("div");
  message.classList.add("message");
  tweetBody.appendChild(message);

  const content = document.createElement("p");
  content.innerHTML = newTweetContent;
  message.appendChild(content);

  // Zone d'intéractivité d'un Tweet
  const tweetActions = document.createElement("div");
  tweetActions.classList.add("tweet-actions");
  tweetBody.appendChild(tweetActions);

  const icones = document.createElement("div");
  icones.classList.add("icones");
  tweetActions.appendChild(icones);

  // Compteur des Likes
  const likes = document.createElement("div");
  likes.classList.add("likes");
  icones.appendChild(likes);

  const compteurLikes = document.createElement("p");
  compteurLikes.classList.add("compteur-likes");
  compteurLikes.innerHTML = `<img src="assets/icons/thumbs-up-outline.svg" width="16px" height="16px" alt="Like"/> ${numberLikes}&nbsp;&nbsp;`;
  likes.appendChild(compteurLikes);

  // Gestion du nombre de like : +1 par click
  compteurLikes.addEventListener("click", function () {
    numberLikes++;
    console.log(
      `<img src="assets/icons/thumbs-up-outline.svg" alt="Like"/> ${numberLikes}`
    );
    compteurLikes.innerHTML = `<img src="assets/icons/thumbs-up-outline.svg" width="16px" height="16px" alt="Like"/> ${numberLikes}&nbsp;&nbsp;`;
  });

  // Compteur des commentaires
  const comments = document.createElement("div");
  comments.classList.add("comments");
  icones.appendChild(comments);

  const compteurComments = document.createElement("p");
  compteurComments.classList.add("compteur-comments");
  compteurComments.innerHTML = `<img src="assets/icons/chatbox-ellipses-outline.svg" width="16px" height="16px" alt="Commentaire"/> ${numberComments} &nbsp;&nbsp;`;
  comments.appendChild(compteurComments);

  // Compteur des partages
  const shares = document.createElement("div");
  shares.classList.add("shares");
  icones.appendChild(shares);

  const compteurShares = document.createElement("p");
  compteurShares.classList.add("compteur-shares");
  compteurShares.innerHTML = `<img src="assets/icons/repeat-outline.svg" width="16px" height="16px" alt="Shares"/> ${numberShares} &nbsp;&nbsp;`;
  shares.appendChild(compteurShares);

  compteurShares.addEventListener("click", function () {
    numberShares++;
    compteurShares.innerHTML = `<img src="assets/icons/repeat-outline.svg" width="16px" height="16px" alt="Shares"/> ${numberShares}`;
    swal.fire({
      titleText: "Post partagé sur votre profil !",
      icon: "success",
      confirmButtonColor: "#d0d1d6",
      confirmButtonText: "Youpi !",
    });
  });

  // Bonton pour répondre à un Tweet
  const replyButton = document.createElement("button");
  replyButton.classList.add("reply-button");
  replyButton.innerHTML = "Répondre";
  tweetActions.appendChild(replyButton);

  const newComm = document.createElement("div");
  newComm.classList.add("new-comm");
  if (!dark.classList.contains("dark")) {
    newComm.classList.add("dark-tweet");
  }
  tweets.appendChild(newComm);

  // Gestion du popup des commentaires et de leur nombre : +1 par envoie
  replyButton.addEventListener("click", function () {
    // Création de la div du PopUp
    newComm.innerHTML = `
    <div class="popup" id="popup">
      <div class="popup-back"></div>
      <div class="popup-container">
      <textarea id="comment-message" name="comment-message" placeholder="Ecrivez votre commentaire"></textarea><br />
        <button class="add-comment" id="popup-close">Commenter</button>
      </div>
    </div>
    `;

    // Affichage du PopUp
    document.getElementById("popup").style.display = "block";

    document
      .getElementById("popup-close")
      .addEventListener("click", function (e) {
        document.getElementById("popup").style.display = "none";
        document.getElementById("comment-message").value = "";
      });

    // Incrémentation du compteur de commentaires
    numberComments++;
    console.log(`💬 ${numberComments}`);
    compteurComments.innerHTML = `<img src="assets/icons/chatbox-ellipses-outline.svg" width="16px" height="16px" alt="Commentaire"/> ${numberComments}&nbsp;&nbsp;`;
  });
}

/* ----------------------------------- */

hamburgerButton.addEventListener("click", function () {
  hamburgerButton.classList.toggle("active");
  menu.classList.toggle("active");
});

/* insérer balise ici pour darktheme */
dark.addEventListener("click", function () {
  const toggle = document.querySelector("body");
  const changeP = document.querySelector(".dark-theme label");
  const boxMessage = document.querySelectorAll(".message");
  const boxTweet = document.querySelectorAll(".tweet");

  toggle.classList.toggle("dark");
  dark.classList.toggle("dark");
  textarea.classList.toggle("dark");
  saySomething.classList.toggle("dark-tweet");
  newMessage.classList.toggle("dark-tweet");
  const trend = document.querySelectorAll(".trend a");

  for (let i = 0; i < boxTweet.length; i++) {
    boxTweet[i].classList.toggle("dark-tweet");
    console.log(boxTweet[i]);
  }

  for (let i of trend) {
    i.classList.toggle("trend-dark");
  }

  changeP.classList.toggle("dark-toggle");
  changeP.classList.toggle("light-toggle");
  if (changeP.classList.contains("dark-toggle")) {
    changeP.innerHTML = "Light<br>Theme";
  } else if (changeP.classList.contains("light-toggle")) {
    changeP.innerHTML = "Dark<br>Theme";
  }

  // Darktheme du popup
});
/* Fonction récupere couleur et converti en 3 variables pour rgb */
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/* insérer balise ici pour changement couleur */
themeColor.addEventListener("input", function (event) {
  document.documentElement.style.setProperty(
    "--primary-color",
    event.target.value
  );
  const rLight = hexToRgb(event.target.value).r + 20;
  const gLight = hexToRgb(event.target.value).g + 20;
  const bLight = hexToRgb(event.target.value).b + 20;
  const rDark = hexToRgb(event.target.value).r - 20;
  const gDark = hexToRgb(event.target.value).g - 20;
  const bDark = hexToRgb(event.target.value).b - 20;
  document.documentElement.style.setProperty(
    "--light-shadow",
    `rgb(${rLight}, ${gLight}, ${bLight})`
  );
  document.documentElement.style.setProperty(
    "--dark-shadow",
    `rgb(${rDark}, ${gDark}, ${bDark})`
  );
});

let screenWidth = window.innerWidth;
const nav = document.querySelector("ul");
const darkBox = document.querySelector(".dark-theme");
const colorBox = document.querySelector(".color-theme");
const tendances = document.querySelector(".tendances");
const parametres = document.querySelector(".parametres");

if (window.innerWidth > 600) {
  nav.appendChild(tendances);
  nav.appendChild(darkBox);
  nav.appendChild(colorBox);
  nav.appendChild(parametres);
} else {
  menu.appendChild(tendances);
  menu.appendChild(parametres);
  menu.appendChild(darkBox);
  menu.appendChild(colorBox);
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 600) {
    nav.appendChild(tendances);
    nav.appendChild(darkBox);
    nav.appendChild(colorBox);
    nav.appendChild(parametres);
  } else {
    menu.appendChild(tendances);
    menu.appendChild(parametres);
    menu.appendChild(darkBox);
    menu.appendChild(colorBox);
  }
});
