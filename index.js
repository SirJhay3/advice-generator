const endpoint = 'https://api.adviceslip.com/advice';
const adviceId = document.querySelector('span');
const advice = document.querySelector('blockquote');
const dice = document.querySelector('.dice');

async function fetchAdvice(){
    const response = await fetch(endpoint);
    const data = await response.json();

    adviceId.textContent = data.slip.id;
    advice.textContent = data.slip.advice;
}
dice.addEventListener('click', fetchAdvice);
window.onload = () => {
    fetchAdvice();
}