const form = document.querySelector('form');
const factDiv = document.querySelector('.number-fact');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const number = e.target.querySelector('input[type="number"]').value;
    const loadText = 'Wait a little bit 🕐';
    factDiv.innerHTML = loadText;
    const baseURL = 'https://cors-anywhere.herokuapp.com/http://numbersapi.com/'; /*前面加上cors網址可以解決遠端不能存取問題*/
    fetch(baseURL + number,{
        method: "GET",
        headers:{
            'x-requested-with': 'text/plain'
        }})
        .then(response => response.text())
        .then(text => factDiv.innerHTML = text);
})