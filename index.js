fetch("https://api.chucknorris.io/jokes/random")
.then( res => res.json() )
.then( data => {
    const jokeContainer = document.getElementById('joke');
    jokeContainer.textContent = data.value;
  })



