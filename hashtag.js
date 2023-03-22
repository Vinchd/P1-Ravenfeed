function getHashtag() {
  const allMessages = document.querySelectorAll(".message p");
  let fullstring = "";
  for (let i = 0; i < allMessages.length; i++) {
    fullstring = fullstring + " " + allMessages[i].innerText;
  }

  // let fullstring = "";
  // for (let i = 0; i < persons2.length; i++) {
  //   fullstring = fullstring + " " + persons2[i].message;
  // }
  console.log(fullstring);

  var string = fullstring;

  let count2 = 0;
  let mot = [];
  let first = string.indexOf("#");
  let last = 0;

  while (first !== -1) {
    count2++;
    first = string.indexOf("#", first + 1);
  }

  console.log(`Compteur de # = ${count2}`);

  first = string.indexOf("#");

  for (let i = 0; i < count2; i++) {
    first = string.indexOf("#", last);
    console.log(`Première position = ${first}`);
    last = string.indexOf(" ", first);
    last == -1 ? (last = string.length) : last;

    console.log(`Dernière position = ${last}`);

    mot.push(string.substring(first, last));
  }

  console.log(mot);
};

module.exports = Hashtag;