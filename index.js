const adviceId = document.querySelector(".advice-id");
const quote = document.querySelector(".quote");
const generateBtn = document.querySelector(".generate-btn");
const divider = document.querySelector("img");

divider.style.maxWidth = "100%";

if (window.innerWidth > 450) {
    divider.setAttribute("src", "./images/pattern-divider-desktop.svg");

}

window.onresize = () => {
    if (window.innerWidth > 620) {
        divider.setAttribute("src", "./images/pattern-divider-desktop.svg");
    } else {
        divider.setAttribute("src", "./images/pattern-divider-mobile.svg");
    }
}

generateBtn.addEventListener("click", () => {
    generateAdvice();
})

generateAdvice();


async function generateAdvice() {
    const data = await fetch("https://api.adviceslip.com/advice");
    response = await data.json();
    adviceId.innerHTML = "ADVICE #" + response.slip.id;
    quote.innerHTML = response.slip.advice;
}