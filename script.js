const saySomething = document.querySelector(".say-something");
const newMessage = document.querySelector(".new-message");
const postButton = document.querySelector("#post");
const tweets = document.querySelector("main");
const form = document.querySelector(".new-tweet-form");
const textarea = document.querySelector(".tweet-message");
const hamburgerButton = document.querySelector(".nav-toggler");
const menu = document.querySelector(".menu");
const dark = document.querySelector(".dark-button");
const themeColor = document.querySelector("#color")
let countLikes = document.querySelectorAll(".compteur-likes");
let count = [136];

const persons = [
  {
    name: "Lucky Dog",
    picture: "https://placekitten.com/200/287",
    message:
      "Extirpez le mal par ma présence semblais lui donner mon approbation, et, autant que j'ai avancé.",
  },
  {
    name: "Symba Lion",
    picture: "https://placekitten.com/200/139",
    message:
      "Mentionnons que les deux soeurs, termina cette longue et lente douleur qui a duré huit jours et huit nuits dans le fossé humide.",
  },
  {
    name: "Léo Tiger",
    picture: "https://placekitten.com/200/190",
    message:
      "Vas-y, vas-y, tu t'appelles esprit libre, aussi sage que brillant, peut-être.",
  },
  {
    name: "Roger Rabbit",
    picture: "https://placekitten.com/200/193",
    message:
      "Objectivement, tout ce beau et noble visage convulsé d'indignation : mais je sais, hélas !",
  },
  {
    name: "Sum Dog",
    picture: "https://placekitten.com/200/96",
    message:
      "Fi, monsieur, n'est-ce point quelque anecdote curieuse sur la conspiration !",
  },
  {
    name: "Maro Cat",
    picture: "https://placekitten.com/200/92",
    message:
      "Pensif, il me vint à ce moment aussi, la torture, et elles ne purent y tenir plus longtemps.",
  },
  {
    name: "Nemo Fish",
    picture: "https://placekitten.com/200/99",
    message:
      "Durant tout le reste est littérature. Lieutenant de vaisseau et chevalier de plusieurs ordres, il entourait la ville.",
  },
];

saySomething.addEventListener("click", function (event) {
  saySomething.style.display = "none";
  newMessage.style.display = "flex";
});

form.onsubmit = function (event) {
  event.preventDefault();
  saySomething.style.display = "flex";
  newMessage.style.display = "none";

  // Test de tweet aléatoire sur le bouton "Post"
  let indice = Math.floor(Math.random() * persons.length);

  createTweet(
    persons[indice].name,
    persons[indice].picture,
    //persons[indice].message
    textarea.value
  );
  countLikes = document.querySelectorAll(".compteur-likes");
  console.log("Counlikes length " + countLikes.length);
  textarea.value = "";
};

// let count = 0;

// console.log(count);
//   const countLikes = document.querySelectorAll(".compteur-likes");
//   countLikes[0].addEventListener("click", function() {
//     count++;
//     console.log(count);
//     countLikes[0].innerHTML = "👍 "+count;
//   });

function createTweet(nameF, pictureF, newTweetContent) {
  let dateOfTheDay = new Date();

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
  //dateOfTheDay.getUTCFullYear().toString().substr(-2);

  console.log(dateOfTheDay);

  const tweet = document.createElement("div");
  tweet.classList.add("tweet");
  tweets.appendChild(tweet);

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
  //   date.style.backgroundColor = "red";
  date.innerHTML = dateOfTheDay;

  const tweetBody = document.createElement("div");
  tweetBody.classList.add("tweet-body");
  tweet.appendChild(tweetBody);

  const message = document.createElement("div");
  message.classList.add("message");
  tweetBody.appendChild(message);

  const content = document.createElement("p");
  content.innerHTML = newTweetContent;
  message.appendChild(content);

  const tweetActions = document.createElement("div");
  tweetActions.classList.add("tweet-actions");
  tweetBody.appendChild(tweetActions);

  const icones = document.createElement("div");
  icones.classList.add("icones");
  tweetActions.appendChild(icones);

  const likes = document.createElement("div");
  likes.classList.add("likes");
  icones.appendChild(likes);

  const compteurLikes = document.createElement("p");
  compteurLikes.classList.add("compteur-likes");
  compteurLikes.innerHTML = "👍 0&nbsp;&nbsp;";
  likes.appendChild(compteurLikes);

  const countLikes = document.querySelectorAll(".compteur-likes");

  const comments = document.createElement("div");
  comments.classList.add("likes");
  icones.appendChild(comments);

  const compteurComments = document.createElement("p");
  compteurComments.classList.add("compteur-comments");
  compteurComments.innerHTML = "💬 0&nbsp;&nbsp;";
  comments.appendChild(compteurComments);

  const shares = document.createElement("div");
  shares.classList.add("shares");
  icones.appendChild(shares);

  const compteurShares = document.createElement("p");
  compteurShares.classList.add("compteur-shares");
  compteurShares.innerHTML = "🔁 0";
  shares.appendChild(compteurShares);

  const replyButton = document.createElement("button");
  replyButton.classList.add("reply-button");
  replyButton.innerHTML = "Reply";
  tweetActions.appendChild(replyButton);
}

countLikes = document.querySelectorAll(".compteur-likes");

for (let i = 0; i < countLikes.length; i++) {
  console.log("test " + countLikes.length);
  countLikes[i].addEventListener("click", function () {
    count.push(0);
    count[i]++;
    console.log(count[i]);
    countLikes[i].innerHTML = "👍 " + count[i];
  });
}

/* ----------------------------------- */

hamburgerButton.addEventListener("click", function () {
    hamburgerButton.classList.toggle("active");
    menu.classList.toggle("active");
})

dark.addEventListener("click", function () {  /* insérer balise ici pour darktheme */
    const toggle = document.querySelector("body");
    const changeP = document.querySelector(".dark-theme label")
    toggle.classList.toggle("dark");
    dark.classList.toggle("dark");


    changeP.classList.toggle("dark-toggle")
    changeP.classList.toggle("light-toggle")
    if (changeP.classList.contains("dark-toggle")) {
        changeP.innerHTML = "Light<br>Theme"
    } else if (changeP.classList.contains("light-toggle")) {
        changeP.innerHTML = "Dark<br>Theme"
    }
})

themeColor.addEventListener("input", function (event) { /* insérer balise ici pour changement couleur */
    const resultNav = document.querySelector("nav");
    const resultMenu = document.querySelector(".menu");
    const header = document.querySelector("header");
    resultNav.style.backgroundColor = event.target.value;
    resultMenu.style.backgroundColor = event.target.value;
    header.style.backgroundColor = event.target.value;
})
