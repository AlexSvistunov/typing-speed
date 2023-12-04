

// Логика приложения: вводим данные, если буква правильная - она становится зеленой, если нет - красной
//
//
//
//
//
//
//
//
//
//


const input = document.querySelector('.input');
const outDiv = document.querySelector('.out');
const text = 'text I wanna be with you shit here we go again mouse speed test great amazing words monitor grass mic';
const textArray = text.split(' ');
console.log(textArray);

function renderOutDiv() {
  for (let i = 0; i < textArray.length; i++) {
    const createSpan = document.createElement('span');
    createSpan.innerHTML = textArray[i] + " ";
    // console.log(createSpan);
    outDiv.appendChild(createSpan);
  }

}



renderOutDiv();

const arrayOfChildren = Array.from(outDiv.querySelectorAll('span'));
console.log(arrayOfChildren);
let currentIndex = 0;


input.addEventListener('input', () => {
  let currentData = input.value;
  console.log(currentData); //потому что value это не цифра, а полностью что человек ввел. либо попытаться отследить последнее, что он ввел, либо изменить немного логику
  compare(currentData);

 

});






function compare(symbol) {

  let currentSpan = arrayOfChildren[currentIndex];


  if(symbol === currentSpan.innerHTML) {
    currentSpan.style.backgroundColor = 'green';
    currentIndex++;
  }


  


  
 

}













// const array = document.querySelector('.text').innerHTML.split('').filter((el) => {
//   if(el !== '' && el !== '\n') {
//     return el;
//   }
// });
// console.log(array);


// input.addEventListener('input', () => {
//   compare(input.value);
// });
