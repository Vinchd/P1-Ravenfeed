const saySomething = document.querySelector(".say-something");
const newMessage = document.querySelector(".new-message");
const form = document.querySelector(".new-tweet-form");
const textarea = document.querySelector(".tweet-message");


saySomething.addEventListener("click", function (event) {
  saySomething.style.display = "none";
  newMessage.style.display = "flex";
});

form.onsubmit = function (event) {
  event.preventDefault();
  saySomething.style.display = "flex";
  newMessage.style.display = "none";

  // indice : valeur entre 0 et 2
  let indice = Math.floor(Math.random() * 3);

  createTweet(
    persons[indice].name,
    persons[indice].picture,
    textarea.value);

  textarea.value = "";
};

const persons = [
  {
    name: "Lucky John",
    picture: "https://placekitten.com/200/287",
    message: "Tweetos aléatoire prout caca"
  },
  {
    name: "Symba Lion",
    picture: "https://placekitten.com/200/139",
    message: "Tweetos chouette prout caca"
  },
  {
    name: "Léo Tiger",
    picture: "https://placekitten.com/200/90",
    message: "Tweetos aléatoire prout pipi"
  },
];

const tweets = document.querySelector("main");

function createTweet(nameF, pictureF, newTweetContent) {
  let dateOfTheDay = new Date();

  dateOfTheDay =
    "📅 " +
    dateOfTheDay.getSeconds() +
    "/" +
    (dateOfTheDay.getUTCMonth() + 1) +
    "/" +
    dateOfTheDay.getUTCFullYear().toString().substr(-2);

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
  profilePic.style.backgroundImage = `url(${pictureF})`;
  profilePic.classList.add("profile-pic");
  profile.appendChild(profilePic);

  const profileName = document.createElement("p");
  profileName.classList.add("profile-name");
  profile.appendChild(profileName);
  profileName.innerHTML = nameF;

  const date = document.createElement("div");
  date.classList.add("date");
  tweetHeader.appendChild(date);
  date.style.backgroundColor = "red";
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