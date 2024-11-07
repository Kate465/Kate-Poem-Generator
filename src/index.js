function displayPoem(response) {
  console.log("poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: " ",
  });
}
function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "cf0f31ao4d106c8ff184dbac1a07a8t3";
  let prompt = `Generate an English poem about ${instructionsInput.value}`;
  let context =
    " You are a poem expert and love to write short poems, your mission is to generate a 4 line poem in basic html, please do not include word html in a poem, make sure you follow user instructions below, do not include title of the poem. Sign the poem with 'SheCodes AI' inside a <strong> element at the end of the poem and not the beginning";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("generating poem");

  axios.get(apiUrl).then(displayPoem);

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="blink"> ⏳Generating an English poem about ${instructionsInput.value} </div>`;
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
