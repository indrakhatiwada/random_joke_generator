

const joke_text = document.getElementById('joke-text')
const punchline = document.getElementById('punchline')
const button = document.getElementById('generate')

button.addEventListener('click',getJokes)

function getJokes(){
    // alert('working till now')
    fetch('https://official-joke-api.appspot.com/random_joke')
    .then(res => res.json())
    .then(data =>{
        joke_text.innerHTML = data.setup
        punchline.innerHTML = data.punchline
       // console.log(data.setup,data.punchline)
    } )
}