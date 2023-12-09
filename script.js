const words = ['heard', 'bird', 'hot', 'deep', 'clear', 'fact', 'back', 'behind', 'easy', 'way', 'expain', 'basic', 'stuff', 'smell'];
const wordsOut = document.querySelector('.words');
const input = document.querySelector('.input');

function renderText() {
  for(let word of words) {
    const spanEl = document.createElement('span')
    spanEl.innerHTML = word;
    wordsOut.append(spanEl)
  }
}

const textNodesArray = Array.from(wordsOut.childNodes).filter(node => node.nodeType === 3);
console.log(textNodesArray);

let currentIndex = 0;

// input.addEventListener('input', () => {
//   if(input.value === words[currentIndex]) {

//   }
// });



renderText();