const bar = document.querySelector(".bars");
const liContainer = document.querySelector(".liContainer");

bar.addEventListener("click", e => {
    liContainer.classList.toggle("active");
})