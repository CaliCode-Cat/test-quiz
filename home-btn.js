'use strict';
(function () {
  const homeBtn = document.querySelector('.home-btn');
  //const question = document.querySelector('.question');
  const langBtns = document.querySelectorAll('.languages-list');
  const quizArea = document.querySelector('.quiz-results');
  //const quizScore = document.querySelector('.quiz-results__score');

  homeBtn.addEventListener('click', function () {
    quizArea.classList.add('quiz-results--none');
    homeBtn.classList.add('home-btn--none');
    langBtns.classList.remove('languages-list--none')
  });
  
})();
