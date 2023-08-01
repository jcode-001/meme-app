"use strict";
const memeForm = document.getElementById("meme-form"); // form container to receive the meme inputs
const imageInput = document.getElementById("meme-url"); // image url input
const generateBtn = document.getElementById("generate-btn"); // "Generate" button

const genMeme = (url, topText, bottomText) => {
  const memeContainer = document.getElementById("meme"); //div container where
  const imageElem = document.createElement("img"); //img tag is created
  memeContainer.appendChild(imageElem); // we append as a child to our div tag
  imageElem.src = url;
  const top = document.createElement("p"); // <p> tag
  const textnode = document.createTextNode(topText); // create a text node with the user 'top text' input
  top.className = "topleft";
  top.appendChild(textnode); //append the user input text into the <p> tag we just created
  memeContainer.insertBefore(top, imageElem);
  const bottom = document.createElement("p");
  const textnode2 = document.createTextNode(bottomText);
  bottom.appendChild(textnode2);
  memeContainer.appendChild(bottom);
};

memeForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const imageUrl = imageInput.value;
  const topText = document.getElementById("top-text"); // input element for top text
  const bottomText = document.getElementById("bottom-text"); // input element for bottom text
  const topTextValue = topText.value; // collecting the vaue in the input elem
  const bottomTextValue = bottomText.value; // collecting the vaue in the input elem
  genMeme(imageUrl, topTextValue, bottomTextValue);
  imageInput.value = "";
});
