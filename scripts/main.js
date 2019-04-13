"use strict";

const button = document.querySelector(".btn");

function callABeagle() {
  fetch("https://dog.ceo/api/breed/beagle/images/random")
    .then(response => response.json())
    .then(data => {
      const msg = document.querySelector("h2");
      msg.innerHTML = "What a cute dog!";
      const img = document.querySelector("img");
      img.src = data.message;
      img.alt = "A beagle";
    });
}

button.addEventListener("click", callABeagle);
