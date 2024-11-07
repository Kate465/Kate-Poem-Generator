function generatePoem(event) {
  event.preventDefault();

  new Typewriter("#poem", {
    strings: "Fatshe Leno dawg",
    autoStart: true,
    delay: 1,
    cursor: " ",
  });

  let poemElement = document.querySelector("#poem");
}
let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
