const jokeele = document.getElementById('joke')
const btn = document.getElementById('jokebtn')


btn.onclick = () =>{
  const config ={
      headers : {
        'Accept':'application/json'
      }
  }
  fetch("https://icanhazdadjoke.com", config)
  .then(res => res.json())
  .then(data => {
    jokeele.innerHTML = data.joke
  })
}
