

const input = document.querySelector('.input');
const outDiv = document.querySelector('.out');
const text = 'text I wanna be with you shit here we go again mouse speed test great amazing words monitor grass mic';
const textArray = text.split(' ');


const wordsObj = [];


// console.log(wordsObj);

function renderOutDiv() {
  for (let i = 0; i < textArray.length; i++) {
    const createSpan = document.createElement('span');
    createSpan.innerHTML = textArray[i] + " ";
    outDiv.appendChild(createSpan);
  }

}

renderOutDiv();



const arrayOfChildren = Array.from(outDiv.querySelectorAll('span'));
// console.log(arrayOfChildren);
for (let i = 0; i < arrayOfChildren.length; i++) {
  wordsObj[i] = {
    number: i,
    inner: arrayOfChildren[i],
    innerHTML: arrayOfChildren[i].innerHTML,
    done: false,
  };
}


console.log(wordsObj);
console.log(wordsObj[0]);


let currentIndex = 0;
let currentValue = '';

let accumulatedValue = '';

input.addEventListener('input', (e) => {
  let currentValue = input.value;
  accumulatedValue = currentValue.charAt(currentValue.length - 1);
  for (let i = 0; i < wordsObj[currentIndex].innerHTML.length; i++) {
    if(accumulatedValue === wordsObj[currentIndex].innerHTML[i]) {
      console.log('Успех!!');
    }
  }


  //может вообще сменить концепцию и проверять чтобы каждая буква сошлась(а каждая буква это accumaled)
  // мб создать спан и красить его


});



// input.addEventListener('input', (e) => {
//   console.log(currentValue);
// });



function compare(value) {

  // logic at that moment: I have a value in the field and I compare it with what I have in the array of objects, If it equals to each other, I will mark the element of the array
  // as 'done'

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
