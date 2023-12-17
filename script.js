const words = [
  'jump', 'yearn', 'zenith', 'apple', 'banana', 'cat', 'dog', 'elephant', 'flower', 'green', 
  'happy', 'ice-cream', 'kind', 'laugh', 'moon', 'nice', 'orange', 'play', 'quiet', 'red', 
  'smile', 'train', 'umbrella', 'violet', 'water', 'xylophone', 'yellow', 'zebra', 'ball', 
  'candy', 'dance', 'egg', 'fun', 'guitar', 'hat', 'island', 'jelly', 'kite', 'lemon', 
  'mouse', 'nap', 'ocean', 'penguin', 'quack', 'xenophobia', 'rainbow', 'sun', 'tree', 
  'up', 'violet', 'wiggle', 'x-ray', 'yawn', 'ape', 'box', 'cup', 'dawn', 'elf', 
  'frog', 'gem', 'harp', 'ink', 'jazz', 'kiwi', 'lime', 'mint', 'nose', 'opal', 
  'pink', 'quilt', 'ring', 'star', 'tide', 'urge', 'van', 'wave', 'xerox', 'yoga', 
  'zip', 'axe', 'bark', 'clam', 'dock', 'elf', 'flip', 'grin', 'hop', 'inch', 
  'jolt', 'keen', 'loop', 'mop', 'nun', 'opal', 'peck', 'quiz', 'ram', 'sip', 
  'tap', 'urge', 'vow', 'whip', 'x-ray', 'yarn', 'zip', 'blink', 'clam', 'dart',
  'bolt', 'curl', 'dust', 'fog', 'glow', 'hike', 'iron', 'jolt', 'knob', 'lamp', 
  'mule', 'noble', 'opal', 'peak', 'quad', 'ramp', 'silk', 'tank', 'urge', 'vial', 
  'whip', 'xerox', 'yarn', 'zero', 'blink', 'claw', 'dare', 'felt', 'grip', 'hive',
  'jinx', 'kelp', 'luck', 'melt', 'nudge', 'opal', 'pluck', 'quest', 'riff', 'sink',
  'tint', 'urge', 'veer', 'whiz', 'xerox', 'yield', 'zinc', 'blink', 'claw', 'dare', 'felt'
];

//как с кнопкой показать еще сделать. когда пользователь приближается уже, то добавлять слова с анимашкой


const wordsOut = document.querySelector('.typing-test__words');
const field = document.querySelector('.input');
const startTest = document.querySelector('.button-start');
const timerMinutes = document.querySelector('.timer__minutes');
const timerSeconds = document.querySelector('.timer__seconds');
const modalResult = document.querySelector('.modal-result');
const wpmResult = document.querySelector('.wpm-result');
let currentIndex = 0;
let functionTimerStarted = false;
let functionTimerEnded;
let amountOfCorrectWords = 0;
let amountOfWrongWords = 0;



function renderWords() {
  for(let word of words) {
    const spanEl = document.createElement('span')
    spanEl.innerHTML = word;
    wordsOut.append(spanEl)
  }
}

renderWords();

const arrayOfSpans = Array.from(wordsOut.childNodes);


field.addEventListener('click', () => {
  if(!functionTimerStarted) {
    field.placeholder = 'Please start the test by clicking on the button'
    field.disabled = true;
  } 


});


field.addEventListener('input', () => {
  arrayOfSpans[currentIndex].classList.add('current')
});

field.addEventListener('keydown', (e) => {
  if(field.value !== '' && e.key === ' ') {
    typingCheck(field)
    currentIndex++
    setTimeout(() => {
      field.value = ''
    }, 50)
  }


});

function typingCheck(input) {
  if(input.value.trim() === words[currentIndex]) {
   correctAnswer()
  } 
  
  if(input.value.trim() !== words[currentIndex]) {
    wrongAnswer()
  }

}


function correctAnswer() {
  amountOfCorrectWords++;
  arrayOfSpans[currentIndex].classList.remove('current')
  arrayOfSpans[currentIndex].classList.add('correct')
}


function wrongAnswer() {
  amountOfWrongWords++;
  arrayOfSpans[currentIndex].classList.remove('current')
  arrayOfSpans[currentIndex].classList.add('wrong')
}


function timer(seconds) {
  field.placeholder = '';
  field.disabled = false;
  functionTimerStarted = true;
  const currentTimeMileSeconds = Date.now();
  const endTime = currentTimeMileSeconds + seconds * 1000;
  const idOfTimer = setInterval(() => {
    const secondsLeft = Math.round((endTime - Date.now()) / 1000);
    timerSeconds.textContent = secondsLeft;
      
    if(secondsLeft <= 0) {
      clearInterval(idOfTimer);
      field.disabled = true;
      timerSeconds.textContent = 'Time is up';
      startTest.textContent = 'Try again';
      startTest.addEventListener('click', () => {
        location.reload();
      });
      const initialText = document.querySelector('.right-answers').textContent;
      document.querySelector('.right-answers').textContent = initialText + " : " + amountOfCorrectWords;
      const initialText2 = document.querySelector('.wrong-answers').textContent;
      document.querySelector('.wrong-answers').textContent = initialText2 + " : " + amountOfWrongWords;
      modalResult.classList.add('modal-result--active');
      const wpm = (amountOfCorrectWords * seconds);
      wpmResult.textContent = `WPM: ${wpm}`;
      
    }
  }, 1000)

  functionTimerEnded = true;


}


startTest.addEventListener('click', () => {
  timer(10);
});







  //хотя бы перемешивать слова
  //попробовать сделать просто что-то на протяжении минуты, а уже потом тестировать такую логику на протяжении минуты(например, с модалкой, показывать ее после 20 сек пребывании на сайте, в течение 30 секунд и вырубать)
  //переименовать переменные, методы
  //брать со своего сервера слова, либо с документа, либо с api
  //таймер
  //улучшение внешнего вида
  //кнопка reset со спиннером
  //генерирование текста на разных языках -> функция смена языка
  //регистрация
  //хранение в бд рекордов

  //are you ready??? 3 2 1(+ animation and then start)
  //чето с кнопкой сделать start test когда время заканчивается
  //возможно убрать блок по окончании таймера

  //сделать Settings с настройками(выплывашку, модалку)


  //когда правильный ответ с зеленым градиент рандомный, когда неправильный с красным градиент рандомный
  //настройки такой sidebar выплывающий, можно выбрать слова посложнее, можно выбрать время, язык



