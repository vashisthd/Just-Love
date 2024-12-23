const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const yesbtn = document.querySelector(".yes-btn");
const nobtn = document.querySelector(".no-btn");

const wrapperRect = wrapper.getBoundingClientRect();
const nobtnRect = nobtn.getBoundingClientRect();

yesbtn.addEventListener("click", () => {
    question.innerHTML = 'I Love You Too ❤️';
    nobtn.style.display = 'none';
    yesbtn.style.display = 'none';
});

nobtn.addEventListener('mouseover', () => {
    const maxX = wrapperRect.width - nobtnRect.width;
    const maxY = wrapperRect.height - nobtnRect.height;

    const randomX = Math.floor(Math.random() * (maxX + 1));
    const randomY = Math.floor(Math.random() * (maxY + 1));

    nobtn.style.left = randomX + 'px';
    nobtn.style.top = randomY + 'px';
});
