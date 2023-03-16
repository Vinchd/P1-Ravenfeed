const saySomething = document.querySelector(".say-something");
const newMessage = document.querySelector(".new-message");
const postButton = document.querySelector("#post");
const textArea = document.querySelector(".new-message textarea")
const tweets = document.querySelector("main");

const persons = [
    {
      name: "Lucky Dog",
      picture: "https://placekitten.com/200/287",
      message: "Extirpez le mal par ma présence semblais lui donner mon approbation, et, autant que j'ai avancé."
    },
    {
      name: "Symba Lion",
      picture: "https://placekitten.com/200/139",
      message: "Mentionnons que les deux soeurs, termina cette longue et lente douleur qui a duré huit jours et huit nuits dans le fossé humide."
    },
    {
      name: "Léo Tiger",
      picture: "https://placekitten.com/200/190",
      message: "Vas-y, vas-y, tu t'appelles esprit libre, aussi sage que brillant, peut-être."
    },
    {
        name: "Roger Rabbit",
        picture: "https://placekitten.com/200/193",
        message: "Objectivement, tout ce beau et noble visage convulsé d'indignation : mais je sais, hélas !"
      },
      {
        name: "Sum Dog",
        picture: "https://placekitten.com/200/96",
        message: "Fi, monsieur, n'est-ce point quelque anecdote curieuse sur la conspiration !"
      },
      {
        name: "Maro Cat",
        picture: "https://placekitten.com/200/92",
        message: "Pensif, il me vint à ce moment aussi, la torture, et elles ne purent y tenir plus longtemps."
      },
      {
        name: "Nemo Fish",
        picture: "https://placekitten.com/200/99",
        message: "Durant tout le reste est littérature. Lieutenant de vaisseau et chevalier de plusieurs ordres, il entourait la ville."
      }
  ];

saySomething.addEventListener("click", function (event) {
  saySomething.style.display = "none";
  newMessage.style.display = "flex";
});

postButton.addEventListener("click", function (event) {
  saySomething.style.display = "flex";
  newMessage.style.display = "none";

  // Test de tweet aléatoire sur le bouton "Post"
  let indice = Math.floor(Math.random() * persons.length);

  createTweet(
    persons[indice].name,
    persons[indice].picture,
    //persons[indice].message
    textArea.value 
  );
  textArea.value="";
  // Fin test
});



function createTweet(nameF, pictureF, newTweetContent) {
  let dateOfTheDay = new Date();

  dateOfTheDay =
    "⌚ " +
    dateOfTheDay.getHours() +
    ":" +
    dateOfTheDay.getMinutes() +
    ":" +
    dateOfTheDay.getSeconds()
    //dateOfTheDay.getUTCFullYear().toString().substr(-2);

  console.log(dateOfTheDay); 

  const tweet = document.createElement("section");
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

  const comments = document.createElement("div");
  comments.classList.add("likes");
  icones.appendChild(comments);

  const compteurComments = document.createElement("p");
  compteurComments.classList.add("compteur-comments");

  const shares = document.createElement("div");
  shares.classList.add("shares");
  icones.appendChild(shares);

  const compteurShares = document.createElement("p");
  compteurShares.classList.add("compteur-shares");

  const replyButton = document.createElement("button");
  replyButton.classList.add("reply-button");
  replyButton.innerHTML = "Reply";
  tweetActions.appendChild(replyButton);
}


