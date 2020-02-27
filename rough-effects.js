'use strict';
(function () {
  const quizTitle = document.getElementById('quiz-title');
  const roughTitle = rough.svg(quizTitle);
  quizTitle.appendChild(roughTitle.rectangle(10, 10, 400, 100, {
    fillStyle: 'solid',
    roughness: 2
  }));

let coord1 = 100;
let coord2 = 100;

  const langSvgs = document.querySelectorAll('.languages-list__svg');
  const langBtnsBgs = [
    'rgba(80, 102, 194, 0.6)',
    'rgba(15, 180, 191, 0.5)',
    'rgba(233, 30, 164, 0.6)',
    'rgba(3, 0, 132, 0.6)',
    'rgba(80, 179, 5, 0.6)',
    'rgba(240, 230, 0, 0.4)',
    'rgba(15, 180, 191, 0.5)',
    'rgba(15, 120, 0, 0.3)',
  ];
  if (langSvgs) {
    langSvgs.forEach(function (it, key) {
      const rougLangSvg = rough.svg(it);
      it.appendChild(rougLangSvg.rectangle(5, 5, coord1, coord2, {
      fill: langBtnsBgs[key % langBtnsBgs.length],
      fillStyle: 'solid',
      roughness: 2
      }));
    });  
  }

/*  
  const question = document.querySelector('.question__text');
  const roughQuestion = rough.svg(question);
  question.appendChild(roughQuestion.rectangle(0, 0, 180, 180, {
    fill: 'rgba(150, 0, 170, 0.3)',
    fillStyle: 'solid',
    roughness: 2
  }));*/

})();




