'use strict';
(function () {
  const homeBtn = document.querySelector('.home-btn');
  //const question = document.querySelector('.question');
  const langList = document.querySelector('.languages-list');
  const quizArea = document.querySelector('.quiz-results');
  const quizScore = document.querySelector('.quiz-results__score');

  homeBtn.addEventListener('click', function () {
    quizArea.classList.add('quiz-results--none');
    langList.classList.remove('languages-list--none');

    //window.location.reload();
  });

  window.getResults = function (total, attempts) {
    quizArea.classList.remove('quiz-results--none');
    quizScore.textContent = Math.round((total / attempts) * 100) + '%';
  };
})();
