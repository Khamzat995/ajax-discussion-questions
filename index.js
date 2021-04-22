


const jokeContainer = document.querySelector('joke');
fetch("https://api.chucknorris.io/jokes/random");
   .then((res) => {
  const text = res.json()  // декодировать ответ в ЖСОН

  text.then((txt) => {    // когда декодируется текст
    let jokeContainer = txt.value  //

  })
})



