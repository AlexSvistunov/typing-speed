const words = ['jump','yearn','zenith','apple','banana','cat','dog','elephant','flower','green','happy','ice-cream','kind','laugh','moon','nice','orange','play','quiet','red','smile','train','umbrella','violet','water','xylophone','yellow','zebra','ball','candy','dance','egg','fun','guitar','hat','island','jelly','kite','lemon','mouse','nap','ocean','penguin','quack','xenophobia','rainbow','sun','tree','up','violet','wiggle','x-ray','yawn'];
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

input.addEventListener('input', () => {
  arrayOfSpans[currentIndex].classList.add('current')
});

let currentIndex = 0;
input.addEventListener('keydown', (e) => {
  if(e.key === ' ') {
    logic()
    currentIndex++
    input.value = ''
  }


});

function logic() {
  if(input.value.trim() === words[currentIndex]) {
    arrayOfSpans[currentIndex].classList.remove('current')
    arrayOfSpans[currentIndex].classList.add('done')
  } 
  
  if(input.value.trim() !== words[currentIndex]) {
    arrayOfSpans[currentIndex].classList.remove('current')
    arrayOfSpans[currentIndex].classList.add('wrong')
  }

}





  //попробовать сделать просто что-то на протяжении минуты, а уже потом тестировать такую логику на протяжении минуты(например, с модалкой, показывать ее после 20 сек пребывании на сайте, в течение 30 секунд и вырубать)


