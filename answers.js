// твои ответы
//Синхронный вешает весь процесс до тех пор, пока не выполнится, и лишь затем передает управление дальше, нижестоящему коду. Асинхронный код делает паузу и передает управление дальше, но точка останова запоминается и управление к ней возвращается в будущем при каком-то условии. Например, таймер или событие.

### Упражнение 1

Есть следующий код со списком консоль.логов:

```javascript
console.log(1) 

fetch('https://api.chucknorris.io/jokes/random')
  .then( res => res.json() )
  .then( data => {
    console.log(2) 
  })

console.log(3)
```

В каком порядке будут выведены логи в консоль?

  1-й console.log(1), 2-й console.log(3), 3-й console.log(2)

### Упражнение 2

**Вопрос 2.1** Что будет выведено в консоль, когда выполнится функция `fetchData`?

  ```javascript
function fetchData(){
  let data = fetch('https://api.chucknorris.io/jokes/random')
    .then( res => res.json() )
    .then( res => res )
  console.log(data)	
}

fetchData(); 
```        // Ответ: Promise
  **Вопрос 2.2** Что будет в консоле после выполнения следующего кода?

  ```javascript
function fetchData(){
  let data = fetch('https://api.chucknorris.io/jokes/random')
    .then( res => res.json() )
    .then( json => console.log(json) )
}

fetchData(); 
```  ////  Ответ объект {categories: Array(0), created_at:.......}

  **Вопрос 2.3** Что будет в консоле после выполнения следующего кода?

  ```javascript
function fetchData(){
    let data = fetch('https://api.chucknorris.io/jokes/random')
      .then( res => res.json() )
      .then( console.log )
}

fetchData();
``` ////  Ответ объект {categories: Array(0), created_at: "2020-01-05 ....}

  ### Упражнение 3

Своими словами: что означает "асинхронность"? //Асинхронный код делает паузу и передает управление дальше, но точка останова запоминается и управление к ней возвращается в будущем при каком-то условии. Например, таймер или событие.

  ### Упражнение 4

Что в следующем кода означает строка, выделенная звездочкой? Какую задачу она выполняет?

  ```javascript
fetch('https://api.chucknorris.io/jokes/random')
  .then( res => res.json() ) //*  
  .then( data => {
    console.log(data) 
  })

```
      // Ответ декодирует данные в формате JSON

  ### Упражнение 5

Исправь ошибки в файле `index.js`, чтобы на странице выводились шутки про Чака Норриса.

⚠️ Нельзя изменять файл `index.html`.

  После исправления укажи какие именно ошибки были обнаружены.