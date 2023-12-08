

const input = document.querySelector('.input');
const outDiv = document.querySelector('.out');
const text = 'text some shit no bro with you shit here we go again mouse speed test great amazing words monitor grass mic';
const textArray = text.split(' ');


const wordsObj = [];



function renderOutDiv() {
  for (let i = 0; i < textArray.length; i++) {
    const createSpan = document.createElement('span');
    createSpan.innerHTML = textArray[i] + " ";
    outDiv.appendChild(createSpan);
  }

}

renderOutDiv();



const arrayOfChildren = Array.from(outDiv.querySelectorAll('span'));
for (let i = 0; i < arrayOfChildren.length; i++) {
  wordsObj[i] = {
    number: i,
    inner: arrayOfChildren[i],
    innerHTML: arrayOfChildren[i].innerHTML,
    done: false,
  };
}


let currentIndex = 0;
let i = 0;
let currentValue = '';


let accumulatedValue = '';

input.addEventListener('input', (e) => {

  const inputValue = input.value.trim();

  const lastSpaceIndex = inputValue.lastIndexOf(' ');


  const lastWord = lastSpaceIndex === -1 ? inputValue : inputValue.substring(lastSpaceIndex + 1);

  if(lastWord.toLowerCase() === wordsObj[currentIndex].innerHTML.trim().toLowerCase()) {
    wordsObj[currentIndex].done = true;
    wordsObj[currentIndex].inner.style.backgroundColor = 'green';
    currentIndex++;

  } 

  if(lastWord.length === wordsObj[currentIndex].innerHTML.length && lastWord.toLowerCase() !== wordsObj[currentIndex].innerHTML.trim().toLowerCase()) {
    wordsObj[currentIndex].inner.style.backgroundColor = 'red';
  }

  //чистить инпут как на референсе

  


});



function compare(value) {
  
}














