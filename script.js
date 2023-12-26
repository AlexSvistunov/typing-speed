
let arrayOfSpans;
let arrayOfWords;


async function requestForWords() {
  arrayOfWords = [];
  try {
    // await new Promise(resolve => setTimeout(resolve, 2000));
    const response = await fetch('words.json');
    
    if(!response.ok) {
      throw new Error();
    }

    const array = await response.json();
    for (let i = 0; i < array.length; i++) {
      arrayOfWords.push(array[i]);
    }

    return arrayOfWords;


  } catch(e) {
    throw new Error();

  }

}

requestForWords();


const wordsOut = document.querySelector('.typing-test__words');
const wordsRow = document.querySelector('.typing-test__word-row');
const wordsInner = document.querySelector('.typing-test__words-wrapper');
const field = document.querySelector('.input');
const startTest = document.querySelector('.button-start');
const timerMinutes = document.querySelector('.timer__minutes');
const timerSeconds = document.querySelector('.timer__seconds');
const modalResult = document.querySelector('.modal-result');
const wpmResult = document.querySelector('.wpm-result');
const modalClose = document.querySelector('.modal-result__close');
let currentIndex = 0;
let functionTimerStarted = false;
let functionTimerEnded;
let amountOfCorrectWords = 0;
let amountOfWrongWords = 0;


async function renderWords() {
  const array = await requestForWords();
  shuffleArray(array);
  for (let i = 0; i < array.length; i++) {
    const spanEl = document.createElement('span');
    spanEl.innerHTML = array[i];
    wordsOut.appendChild(spanEl);
  }

  arrayOfSpans = Array.from(wordsOut.childNodes);

}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

renderWords();


field.addEventListener('click', () => {
  if(!functionTimerStarted) {
    field.placeholder = 'Please start the test by clicking on the button'
    field.disabled = true;
  } 

});


field.addEventListener('input', (e) => {
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

  transitionToWords();
  if(input.value.trim() === arrayOfWords[currentIndex]) {
   correctAnswer()
  } 
  
  if(input.value.trim() !== arrayOfWords[currentIndex]) {
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


function transitionToWords() {
  let base;
  if(currentIndex > 0 && currentIndex % 17 === 0) {
    base = parseFloat(window.getComputedStyle(wordsOut).getPropertyValue('top'));
    wordsOut.style.top = base + -60 + 'px';
    
  }
}


startTest.addEventListener('click', () => {
  timer(10);
});

modalClose.addEventListener('click', () => {
  modalResult.classList.remove('modal-result--active');
});




  //обрезать столько, на котором этот спан(вычислить через currentIndex через getPropertyValue top)
  //переименовать переменные, методы
  //улучшение внешнего вида
  //кнопка reset со спиннером
  //генерирование текста на разных языках -> функция смена языка
  //регистрация
  //хранение в бд рекордов

  //are you ready??? 3 2 1(+ animation and then start)
  //возможно убрать блок по окончании таймера

  //сделать Settings с настройками(выплывашку, модалку)

  //когда правильный ответ с зеленым градиент рандомный, когда неправильный с красным градиент рандомный
  //настройки такой sidebar выплывающий, можно выбрать слова посложнее, можно выбрать время, язык
  //или вообще в бок листать слова

  //проверка чтобы не было много пробелов подряд, а то ломается приложение



