const words = ['heard', 'bird', 'hot', 'deep', 'clear', 'fact', 'back', 'behind', 'easy', 'way', 'explain', 'basic', 'stuff', 'smell'];
const wordsOut = document.querySelector('.words');
const input = document.querySelector('.input');

function renderText() {
  for(let word of words) {
    const spanEl = document.createElement('span')
    spanEl.innerHTML = word;
    wordsOut.append(spanEl)
  }
}

renderText();

const arrayOfSpans = Array.from(wordsOut.childNodes);
console.log(arrayOfSpans);

let currentIndex = 0;


input.addEventListener('input', logic)


function logic() {
  arrayOfSpans[currentIndex].classList.add('current')
  if(input.value.trim() === words[currentIndex]) {
    arrayOfSpans[currentIndex].classList.remove('current')
    arrayOfSpans[currentIndex].classList.add('done')
    currentIndex++
    input.value = ''
  }

  // if(input.value.trim().length === words[currentIndex].length && input.value.trim() !== words[currentIndex]) {
  //   arrayOfSpans[currentIndex].classList.remove('current')
  //   arrayOfSpans[currentIndex].classList.add('wrong')
  //   currentIndex++
  //   input.value = ''
  // }
}




  //подтвердить это пробел, от него отталкиваться
  //попробовать сделать просто что-то на протяжении минуты, а уже потом тестировать такую логику на протяжении минуты


